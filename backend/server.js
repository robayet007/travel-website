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

// ✅ TEMPORARY: In-memory database for testing
let temporaryProducts = [
  {
    _id: '1',
    title: 'Cox\'s Bazar Beach Tour',
    category: 'Beach',
    price: 5000,
    offerPrice: 4500,
    features: ['3 Days 2 Nights', 'Breakfast', 'Beach Access'],
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2', 
    title: 'Sajek Valley Tour',
    category: 'Mountain',
    price: 7000,
    offerPrice: 6500,
    features: ['Hotel Stay', 'Local Guide', 'Breakfast'],
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// 📊 API Routes with TEMPORARY DATA

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    console.log('📦 Fetching products from temporary storage...');
    
    res.json({
      success: true,
      count: temporaryProducts.length,
      data: temporaryProducts,
      message: 'Using temporary data - MongoDB connection in progress'
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error'
    });
  }
});

// Create product
app.post('/api/products', async (req, res) => {
  try {
    console.log('📦 Creating product in temporary storage...');
    
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const newProduct = {
      _id: Date.now().toString(),
      title: title.trim(),
      category: category.trim(),
      price: Number(price),
      offerPrice: Number(offerPrice),
      features: features || [],
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    temporaryProducts.unshift(newProduct);
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully (Temporary storage)',
      data: newProduct
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(400).json({ 
      success: false,
      message: error.message 
    });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const initialLength = temporaryProducts.length;
    
    temporaryProducts = temporaryProducts.filter(product => product._id !== productId);
    
    if (temporaryProducts.length === initialLength) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    res.json({ 
      success: true,
      message: 'Product deleted successfully (Temporary storage)'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error'
    });
  }
});

// Database status
app.get('/db-status', (req, res) => {
  res.json({
    success: false,
    message: '⚠️ Using temporary storage - MongoDB connection in progress',
    connectionState: 0,
    storage: 'Temporary Memory'
  });
});

// Home route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running!',
    database: '⚠️ Temporary Storage (MongoDB connecting...)',
    endpoints: {
      test: 'GET /test',
      dbStatus: 'GET /db-status',
      getAllProducts: 'GET /api/products',
      createProduct: 'POST /api/products',
      deleteProduct: 'DELETE /api/products/:id'
    },
    note: 'Products are stored in temporary memory for now'
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