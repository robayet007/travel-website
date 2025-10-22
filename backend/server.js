import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize
dotenv.config();
const app = express();

// ✅ Simple CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI 

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Product Schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  features: [{ type: String }],
  image: { type: String, default: '' }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// 📊 API Routes (Without Image Upload)

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ Get products by category
app.get('/api/products/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ 
      category: new RegExp(category, 'i') 
    }).sort({ createdAt: -1 });
    
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create product (Without image)
app.post('/api/products', async (req, res) => {
  try {
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({ success: false, message: 'All fields required' });
    }

    const newProduct = new Product({
      title: title.trim(),
      category: category.trim(),
      price: Number(price),
      offerPrice: Number(offerPrice),
      features: Array.isArray(features) ? features : [],
      image: ''
    });

    const savedProduct = await newProduct.save();
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: savedProduct
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Home route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running!',
    endpoints: {
      getAllProducts: 'GET /api/products',
      getByCategory: 'GET /api/products/category/:category',
      createProduct: 'POST /api/products'
    }
  });
});

export default app;