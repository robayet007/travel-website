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

// MongoDB Connection with FIXED URI
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:vkWbkhEYvOaGuv9i@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

console.log('🔗 Attempting MongoDB connection...');

// ✅ FIXED Connection with better error handling
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
      bufferCommands: false,
      bufferMaxEntries: 0
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    console.log('🔧 Connection URI:', MONGODB_URI.substring(0, 50) + '...');
  }
};

connectDB();

// Simple Product Schema
const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  offerPrice: Number,
  features: [String],
  image: String
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

// 📊 API Routes with FALLBACK

// Get all products - WITH FALLBACK DATA
app.get('/api/products', async (req, res) => {
  try {
    console.log('📦 Fetching products...');
    
    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      console.log('⚠️ Database not connected, returning fallback data');
      
      // ✅ RETURN FALLBACK DATA
      return res.json({
        success: true,
        count: 0,
        data: [],
        message: 'Using fallback data - Database connecting...'
      });
    }
    
    const products = await Product.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('❌ Error:', error.message);
    
    // ✅ RETURN FALLBACK ON ERROR
    res.json({
      success: true,
      count: 0,
      data: [],
      message: 'Using fallback data - ' + error.message
    });
  }
});

// Create product - WITH BETTER ERROR HANDLING
app.post('/api/products', async (req, res) => {
  try {
    console.log('📦 Creating product...');
    
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ 
        success: false,
        message: 'Database not ready. Please try again.'
      });
    }
    
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const newProduct = new Product({
      title: title.trim(),
      category: category.trim(),
      price: Number(price),
      offerPrice: Number(offerPrice),
      features: features || [],
      image: ''
    });

    const savedProduct = await newProduct.save();
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: savedProduct
    });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(400).json({ 
      success: false,
      message: 'Failed to create product: ' + error.message
    });
  }
});

// Database status check
app.get('/db-status', (req, res) => {
  const status = mongoose.connection.readyState;
  const statusText = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'][status];
  
  res.json({
    success: status === 1,
    message: `Database status: ${statusText}`,
    connectionState: status,
    states: {
      0: 'Disconnected',
      1: 'Connected', 
      2: 'Connecting',
      3: 'Disconnecting'
    }
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
      createProduct: 'POST /api/products'
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