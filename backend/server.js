import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'Server is working!',
    timestamp: new Date().toISOString()
  });
});

// ✅ MongoDB Connection with PROPER SETTINGS
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:vkWbkhEYvOaGuv9i@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

console.log('🔗 Connecting to MongoDB...');

// Enhanced connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    console.log('💡 Solution: Check MongoDB Atlas Network Access settings');
  }
};

connectDB();

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

// 📊 API Routes with MONGODB

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    console.log('📦 Fetching products from MongoDB...');
    
    // Check database connection
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ 
        success: false,
        message: 'Database not connected. Please check MongoDB settings.',
        connectionState: mongoose.connection.readyState
      });
    }
    
    const products = await Product.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: products.length,
      data: products,
      message: 'Data from MongoDB'
    });
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching products: ' + error.message
    });
  }
});

// Create product - WILL SAVE TO MONGODB
app.post('/api/products', async (req, res) => {
  try {
    console.log('📦 Creating product in MongoDB...');
    
    // Check database connection
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ 
        success: false,
        message: 'Database not connected. Cannot save product.'
      });
    }
    
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // ✅ THIS WILL SAVE TO MONGODB
    const newProduct = new Product({
      title: title.trim(),
      category: category.trim(),
      price: Number(price),
      offerPrice: Number(offerPrice),
      features: features || [],
      image: ''
    });

    const savedProduct = await newProduct.save();
    console.log('✅ Product saved to MongoDB:', savedProduct._id);
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully in MongoDB!',
      data: savedProduct
    });
  } catch (error) {
    console.error('❌ Error creating product:', error);
    res.status(400).json({ 
      success: false,
      message: 'Failed to create product: ' + error.message
    });
  }
});

// Delete product from MongoDB
app.delete('/api/products/:id', async (req, res) => {
  try {
    // Check database connection
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ 
        success: false,
        message: 'Database not connected'
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
    if (!deletedProduct) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    res.json({ 
      success: true,
      message: 'Product deleted successfully from MongoDB'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// Database status
app.get('/db-status', (req, res) => {
  const status = mongoose.connection.readyState;
  const statusText = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'][status];
  
  res.json({
    success: status === 1,
    message: `Database status: ${statusText}`,
    connectionState: status,
    note: status === 0 ? 'Check MongoDB Atlas Network Access settings' : 'All good!'
  });
});

// Home route
app.get('/', (req, res) => {
  const dbStatus = ['❌ Disconnected', '✅ Connected', '🔄 Connecting', '⚠️ Disconnecting'][mongoose.connection.readyState];
  
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running!',
    database: dbStatus,
    endpoints: {
      test: 'GET /test',
      dbStatus: 'GET /db-status',
      getAllProducts: 'GET /api/products',
      createProduct: 'POST /api/products',
      deleteProduct: 'DELETE /api/products/:id'
    }
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