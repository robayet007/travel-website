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

// Test route - FIRST
app.get('/test', (req, res) => {
  console.log('✅ Test route hit');
  res.json({ 
    success: true,
    message: 'Server is working!',
    timestamp: new Date().toISOString()
  });
});

// Test database connection - SECOND
app.get('/db-test', async (req, res) => {
  try {
    console.log('🔗 Testing MongoDB connection...');
    
    // Check if mongoose is connected
    const isConnected = mongoose.connection.readyState === 1;
    
    if (isConnected) {
      res.json({ 
        success: true,
        message: '✅ MongoDB is connected!',
        connectionState: mongoose.connection.readyState
      });
    } else {
      res.json({ 
        success: false,
        message: '❌ MongoDB is not connected',
        connectionState: mongoose.connection.readyState
      });
    }
  } catch (error) {
    console.error('❌ DB Test Error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Database test failed'
    });
  }
});

// MongoDB Connection with better options
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:vkWbkhEYvOaGuv9i@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

console.log('🔗 Attempting MongoDB connection...');

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully');
})
.catch((err) => {
  console.error('❌ MongoDB Connection Failed:', err.message);
});

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('✅ Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ Mongoose disconnected');
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

// 📊 API Routes

// Get all products - WITH BETTER ERROR HANDLING
app.get('/api/products', async (req, res) => {
  try {
    console.log('📦 Fetching products...');
    
    // Check database connection first
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ 
        success: false,
        message: 'Database not connected',
        connectionState: mongoose.connection.readyState
      });
    }
    
    const products = await Product.find().sort({ createdAt: -1 });
    
    console.log(`✅ Found ${products.length} products`);
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('❌ Error fetching products:', error.message);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch products: ' + error.message
    });
  }
});

// Create product (JSON only)
app.post('/api/products', async (req, res) => {
  try {
    console.log('📦 Creating product...', req.body);
    
    // Check database connection first
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ 
        success: false,
        message: 'Database not connected'
      });
    }
    
    const { title, category, price, offerPrice, features } = req.body;

    // Validation
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
    
    console.log('✅ Product created:', savedProduct._id);
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: savedProduct
    });
  } catch (error) {
    console.error('❌ Error creating product:', error.message);
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
    endpoints: {
      test: 'GET /test',
      dbTest: 'GET /db-test',
      getAllProducts: 'GET /api/products',
      createProduct: 'POST /api/products',
      getProduct: 'GET /api/products/:id'
    },
    database: {
      connectionState: mongoose.connection.readyState,
      states: ['disconnected', 'connected', 'connecting', 'disconnecting']
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