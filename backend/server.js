import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MONGODB URI (Environment Variable থেকে নিন)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:IlrLmx5F6iUVSLRY@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

// ✅ Global connection variable for Vercel
let cachedDb = null;

// ✅ IMPROVED CONNECTION FOR VERCEL
const connectDB = async () => {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('✅ Using cached MongoDB connection');
    return cachedDb;
  }

  try {
    console.log('🔄 Connecting to MongoDB...');
    
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
    });
    
    cachedDb = conn;
    console.log('✅ MongoDB Connected Successfully!');
    return conn;
    
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    throw error;
  }
};

// Product Schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  offerPrice: { type: Number, required: true, min: 0 },
  features: [{ type: String, trim: true }],
  image: { type: String, default: '' }
}, { timestamps: true });

// ✅ Model check করে নিন (Vercel-এ multiple initialization avoid করতে)
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// 📊 API Routes

// Test route
app.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: '✅ Server is working!',
    timestamp: new Date().toISOString()
  });
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    await connectDB();
    
    const products = await Product.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: products.length,
      data: products,
      source: 'mongodb'
    });
  } catch (error) {
    console.error('❌ Error fetching products:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message
    });
  }
});

// Create product
app.post('/api/products', async (req, res) => {
  try {
    await connectDB();
    
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields required (title, category, price, offerPrice)' 
      });
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
      message: 'Product created successfully!',
      data: savedProduct
    });

  } catch (error) {
    console.error('❌ Error creating product:', error.message);
    res.status(400).json({ 
      success: false, 
      message: 'Failed to create product',
      error: error.message 
    });
  }
});

// Update product
app.put('/api/products/:id', async (req, res) => {
  try {
    await connectDB();
    
    const { id } = req.params;
    const updateData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct
    });

  } catch (error) {
    console.error('❌ Error updating product:', error.message);
    res.status(400).json({
      success: false,
      message: 'Failed to update product',
      error: error.message
    });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    await connectDB();
    
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product deleted successfully',
      data: deletedProduct
    });

  } catch (error) {
    console.error('❌ Error deleting product:', error.message);
    res.status(400).json({
      success: false,
      message: 'Failed to delete product',
      error: error.message
    });
  }
});

// ✅ MongoDB Status Check
app.get('/mongodb-status', async (req, res) => {
  try {
    await connectDB();
    const state = mongoose.connection.readyState;
    const states = {
      0: 'Disconnected',
      1: 'Connected',
      2: 'Connecting',
      3: 'Disconnecting'
    };

    res.json({
      success: true,
      connected: state === 1,
      connectionState: states[state],
      message: state === 1 ? '✅ MongoDB Connected' : '❌ MongoDB Disconnected'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      connected: false,
      message: '❌ MongoDB Connection Failed',
      error: error.message
    });
  }
});

// Home route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running!',
    endpoints: {
      test: 'GET /test',
      mongodbStatus: 'GET /mongodb-status',
      getAllProducts: 'GET /api/products',
      createProduct: 'POST /api/products',
      updateProduct: 'PUT /api/products/:id',
      deleteProduct: 'DELETE /api/products/:id'
    }
  });
});

// ✅ Local development only
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Local: http://localhost:${PORT}`);
  });
}

// ✅ Vercel export
export default app;