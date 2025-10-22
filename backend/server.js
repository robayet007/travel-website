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

// Simple test route
app.get('/test', (req, res) => {
  console.log('✅ Test route hit');
  res.json({ 
    success: true,
    message: 'Server is working!',
    timestamp: new Date().toISOString()
  });
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:vkWbkhEYvOaGuv9i@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

console.log('🔗 Connecting to MongoDB...');

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
  });

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

// 📊 SIMPLE API Routes

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    console.log('📦 Fetching products...');
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error'
    });
  }
});

// Create product (JSON only - no image)
app.post('/api/products', async (req, res) => {
  try {
    console.log('📦 Creating product...', req.body);
    
    const { title, category, price, offerPrice, features } = req.body;

    const newProduct = new Product({
      title: title || 'Test Product',
      category: category || 'Test Category',
      price: price || 1000,
      offerPrice: offerPrice || 900,
      features: features || ['Feature 1', 'Feature 2'],
      image: ''
    });

    const savedProduct = await newProduct.save();
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: savedProduct
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(400).json({ 
      success: false,
      message: error.message 
    });
  }
});

// Home route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running!',
    endpoints: [
      'GET /test',
      'GET /api/products', 
      'POST /api/products'
    ]
  });
});

// Handle all other routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Export for Vercel
export default app;