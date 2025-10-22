import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize
dotenv.config();
const app = express();

// ✅ CORS Fix
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route - FIRST
app.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: '✅ Server is working!',
    timestamp: new Date().toISOString()
  });
});

// ✅ SIMPLE MONGODB CONNECTION (FIXED)
const MONGODB_URI = process.env.MONGODB_URI 

console.log('🔗 Starting MongoDB connection...');

// ✅ Simple connection without complex options
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Failed:', error.message);
  });

// ✅ Temporary in-memory storage while MongoDB connects
let temporaryProducts = [];

// Product Schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  offerPrice: {
    type: Number,
    required: true,
    min: 0
  },
  features: [{
    type: String,
    trim: true
  }],
  image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

// 📊 API Routes with FALLBACK SUPPORT

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    console.log('📦 Fetching products...');
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState === 1) {
      // ✅ MongoDB connected - fetch from database
      const products = await Product.find().sort({ createdAt: -1 });
      console.log(`✅ Found ${products.length} products from MongoDB`);
      
      res.json({
        success: true,
        count: products.length,
        data: products,
        source: 'mongodb'
      });
    } else {
      // ✅ MongoDB not connected - use temporary storage
      console.log(`⚠️ Using temporary storage: ${temporaryProducts.length} products`);
      res.json({
        success: true,
        count: temporaryProducts.length,
        data: temporaryProducts,
        source: 'temporary',
        message: 'MongoDB connecting... using temporary storage'
      });
    }
  } catch (error) {
    console.error('❌ Error fetching products:', error.message);
    // ✅ Fallback to temporary storage on error
    res.json({
      success: true,
      count: temporaryProducts.length,
      data: temporaryProducts,
      source: 'temporary-fallback',
      message: 'Using temporary storage due to error'
    });
  }
});

// ✅ Get products by category - WITH FALLBACK
app.get('/api/products/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    console.log('📦 Fetching products for category:', category);
    
    if (mongoose.connection.readyState === 1) {
      // ✅ MongoDB connected
      const products = await Product.find({ 
        category: new RegExp(category, 'i') 
      }).sort({ createdAt: -1 });
      
      res.json({
        success: true,
        count: products.length,
        data: products,
        source: 'mongodb'
      });
    } else {
      // ✅ MongoDB not connected - filter temporary storage
      const filteredProducts = temporaryProducts.filter(pkg => 
        pkg.category.toLowerCase().includes(category.toLowerCase())
      );
      
      res.json({
        success: true,
        count: filteredProducts.length,
        data: filteredProducts,
        source: 'temporary',
        message: 'MongoDB connecting... using temporary storage'
      });
    }
  } catch (error) {
    console.error('❌ Error fetching category products:', error);
    // ✅ Fallback
    const filteredProducts = temporaryProducts.filter(pkg => 
      pkg.category.toLowerCase().includes(req.params.category.toLowerCase())
    );
    
    res.json({
      success: true,
      count: filteredProducts.length,
      data: filteredProducts,
      source: 'temporary-fallback'
    });
  }
});

// Create product - SAVES TO BOTH MONGODB AND TEMPORARY STORAGE
app.post('/api/products', async (req, res) => {
  try {
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
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

    // ✅ Always save to temporary storage
    temporaryProducts.unshift(productData);
    console.log('✅ Product saved to temporary storage');

    // ✅ Try to save to MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      try {
        const newProduct = new Product(productData);
        const savedProduct = await newProduct.save();
        console.log('✅ Product also saved to MongoDB');
        
        res.status(201).json({
          success: true,
          message: 'Product created successfully! (Saved to MongoDB & Temporary)',
          data: savedProduct,
          savedTo: 'both'
        });
        return;
      } catch (mongoError) {
        console.log('⚠️ Could not save to MongoDB, but saved to temporary storage');
      }
    }

    // ✅ Response for temporary storage only
    res.status(201).json({
      success: true,
      message: 'Product created successfully! (Saved to Temporary Storage - MongoDB connecting)',
      data: productData,
      savedTo: 'temporary'
    });

  } catch (error) {
    console.error('❌ Error creating product:', error);
    res.status(400).json({ 
      success: false,
      message: error.message 
    });
  }
});

// Database status check
app.get('/db-status', (req, res) => {
  const status = mongoose.connection.readyState;
  const statusText = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'][status];
  
  res.json({
    success: status === 1,
    message: `Database: ${statusText}`,
    connectionState: status,
    temporaryStorageCount: temporaryProducts.length,
    advice: status !== 1 ? 'Using temporary storage until MongoDB connects' : 'All good!'
  });
});

// Home route
app.get('/', (req, res) => {
  const status = mongoose.connection.readyState;
  const dbStatus = ['❌ Disconnected', '✅ Connected', '🔄 Connecting', '⚠️ Disconnecting'][status];
  
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running!',
    database: dbStatus,
    temporaryProducts: temporaryProducts.length,
    endpoints: {
      test: 'GET /test',
      dbStatus: 'GET /db-status',
      getAllProducts: 'GET /api/products',
      getByCategory: 'GET /api/products/category/:category',
      createProduct: 'POST /api/products'
    },
    note: 'Data will be saved in temporary storage until MongoDB connects'
  });
});

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Export for Vercel
export default app;