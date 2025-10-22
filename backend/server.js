import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize
dotenv.config();
const app = express();

// CORS
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: '✅ Server is working!',
    timestamp: new Date().toISOString()
  });
});

// ✅ UPDATED MONGODB URI WITH NEW PASSWORD
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:IlrLmx5F6iUVSLRY@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

console.log('🔗 Connecting to MongoDB with new password...');

let isConnected = false;
let temporaryProducts = [];

// ✅ IMPROVED CONNECTION FUNCTION
const connectDB = async () => {
  try {
    console.log('🔄 Attempting MongoDB connection...');
    
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });
    
    isConnected = true;
    console.log('✅ MongoDB Connected Successfully with new password!');
    
    // ✅ যখন MongoDB connect হবে, temporary data save করবে
    if (temporaryProducts.length > 0) {
      console.log(`🔄 Saving ${temporaryProducts.length} temporary products to MongoDB...`);
      await saveTemporaryToMongoDB();
    }
    
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    isConnected = false;
    
    // Retry after 10 seconds
    setTimeout(connectDB, 10000);
  }
};

// ✅ FUNCTION TO SAVE TEMPORARY DATA TO MONGODB
const saveTemporaryToMongoDB = async () => {
  try {
    let savedCount = 0;
    for (const tempProduct of temporaryProducts) {
      const existingProduct = await Product.findOne({ 
        title: tempProduct.title,
        category: tempProduct.category 
      });
      
      if (!existingProduct) {
        const newProduct = new Product({
          title: tempProduct.title,
          category: tempProduct.category,
          price: tempProduct.price,
          offerPrice: tempProduct.offerPrice,
          features: tempProduct.features,
          image: tempProduct.image
        });
        await newProduct.save();
        savedCount++;
        console.log('✅ Saved to MongoDB:', tempProduct.title);
      }
    }
    console.log(`🎉 Successfully saved ${savedCount} products to MongoDB`);
    
    // Clear temporary storage after saving
    temporaryProducts = [];
    
  } catch (error) {
    console.error('❌ Error saving temporary data to MongoDB:', error.message);
  }
};

// Start connection
connectDB();

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('✅ Mongoose connected to MongoDB');
  isConnected = true;
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
  isConnected = false;
});

// Product Schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  offerPrice: { type: Number, required: true, min: 0 },
  features: [{ type: String, trim: true }],
  image: { type: String, default: '' }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// 📊 API Routes

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    if (isConnected) {
      // ✅ MongoDB থেকে data fetch করুন
      const products = await Product.find().sort({ createdAt: -1 });
      res.json({
        success: true,
        count: products.length,
        data: products,
        source: 'mongodb'
      });
    } else {
      // ✅ Temporary storage থেকে data fetch করুন
      res.json({
        success: true,
        count: temporaryProducts.length,
        data: temporaryProducts,
        source: 'temporary',
        message: 'MongoDB connecting...'
      });
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.json({
      success: true,
      count: temporaryProducts.length,
      data: temporaryProducts,
      source: 'temporary-fallback'
    });
  }
});

// Create product
app.post('/api/products', async (req, res) => {
  try {
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({ success: false, message: 'All fields required' });
    }

    const productData = {
      _id: Date.now().toString(),
      title: title.trim(),
      category: category.trim(),
      price: Number(price),
      offerPrice: Number(offerPrice),
      features: Array.isArray(features) ? features : [],
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // ✅ Always save to temporary storage first
    temporaryProducts.unshift(productData);

    // ✅ যদি MongoDB connected থাকে, তাহলে MongoDB-তেও save করুন
    if (isConnected) {
      try {
        const newProduct = new Product(productData);
        const savedProduct = await newProduct.save();
        
        res.status(201).json({
          success: true,
          message: 'Product created successfully! (Saved to MongoDB)',
          data: savedProduct,
          savedTo: 'mongodb'
        });
        return;
      } catch (mongoError) {
        console.log('⚠️ MongoDB save failed, but saved to temporary storage');
      }
    }

    // ✅ Temporary storage response
    res.status(201).json({
      success: true,
      message: 'Product created successfully! (Saved to Temporary Storage)',
      data: productData,
      savedTo: 'temporary'
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// ✅ MANUAL MONGODB SAVE ENDPOINT
app.get('/save-to-mongodb', async (req, res) => {
  try {
    if (isConnected && temporaryProducts.length > 0) {
      await saveTemporaryToMongoDB();
      res.json({
        success: true,
        message: `Saved ${temporaryProducts.length} products to MongoDB`,
        savedCount: temporaryProducts.length
      });
    } else {
      res.json({
        success: false,
        message: isConnected ? 'No temporary products to save' : 'MongoDB not connected',
        tempCount: temporaryProducts.length,
        connected: isConnected
      });
    }
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
});

// ✅ CHECK MONGODB STATUS
app.get('/mongodb-status', (req, res) => {
  res.json({
    success: isConnected,
    connected: isConnected,
    temporaryProducts: temporaryProducts.length,
    connectionState: mongoose.connection.readyState,
    message: isConnected ? '✅ MongoDB Connected' : '❌ MongoDB Disconnected'
  });
});

// Home route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running!',
    mongodb: isConnected ? '✅ Connected' : '❌ Disconnected',
    temporaryProducts: temporaryProducts.length,
    endpoints: {
      test: 'GET /test',
      mongodbStatus: 'GET /mongodb-status',
      saveToMongoDB: 'GET /save-to-mongodb',
      getAllProducts: 'GET /api/products',
      createProduct: 'POST /api/products'
    }
  });
});

export default app;