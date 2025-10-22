import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// ✅ Vercel-এর জন্য uploads directory /tmp ব্যবহার করুন
const uploadsDir = path.join('/tmp', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));

// Multer configuration for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'image-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// ✅ MongoDB Connection with better options
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:vkWbkhEYvOaGuv9i@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

// ✅ Connection function with error handling
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
  }
};

connectDB();

// Product Schema with image
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

// 📊 API Routes

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    res.status(500).json({ 
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
  try {
    // ✅ MongoDB ID validation
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid product ID' 
      });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('❌ Error fetching product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Internal server error'
    });
  }
});

// Create new product with image
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { title, category, price, offerPrice, features } = req.body;
    
    // ✅ Input validation
    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({
        success: false,
        message: 'Title, category, price, and offerPrice are required'
      });
    }

    let imagePath = '';
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    // Parse features
    let featuresArray = [];
    if (features) {
      try {
        featuresArray = JSON.parse(features);
      } catch (e) {
        if (Array.isArray(features)) {
          featuresArray = features;
        } else if (typeof features === 'string') {
          featuresArray = features.split(',').map(f => f.trim());
        }
      }
    }

    // Filter out empty features
    featuresArray = featuresArray.filter(feature => feature && feature.trim() !== '');

    const newProduct = new Product({
      title: title.trim(),
      category: category.trim(),
      price: Number(price),
      offerPrice: Number(offerPrice),
      features: featuresArray,
      image: imagePath
    });

    const savedProduct = await newProduct.save();
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: savedProduct
    });
  } catch (error) {
    console.error('❌ Error creating product:', error);
    res.status(400).json({ 
      success: false,
      message: error.message 
    });
  }
});

// Update product with image
app.put('/api/products/:id', upload.single('image'), async (req, res) => {
  try {
    // ✅ MongoDB ID validation
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid product ID' 
      });
    }

    const { title, category, price, offerPrice, features } = req.body;
    
    const updateData = {
      title: title?.trim() || '',
      category: category?.trim() || '',
      price: Number(price) || 0,
      offerPrice: Number(offerPrice) || 0
    };

    // Parse features
    if (features) {
      try {
        updateData.features = JSON.parse(features);
      } catch (e) {
        if (Array.isArray(features)) {
          updateData.features = features;
        } else if (typeof features === 'string') {
          updateData.features = features.split(',').map(f => f.trim());
        }
      }
      updateData.features = updateData.features.filter(feature => feature && feature.trim() !== '');
    }

    // If new image is uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
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
    console.error('❌ Error updating product:', error);
    res.status(400).json({ 
      success: false,
      message: error.message 
    });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    // ✅ MongoDB ID validation
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid product ID' 
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
      message: 'Product deleted successfully' 
    });
  } catch (error) {
    console.error('❌ Error deleting product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get products by category
app.get('/api/products/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ 
      category: new RegExp(req.params.category, 'i') 
    }).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('❌ Error fetching products by category:', error);
    res.status(500).json({ 
      success: false,
      message: 'Internal server error'
    });
  }
});

// Home route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '🛍️ Travel Admin API is running on Vercel!',
    endpoints: {
      getAllProducts: 'GET /api/products',
      getProduct: 'GET /api/products/:id',
      createProduct: 'POST /api/products',
      updateProduct: 'PUT /api/products/:id',
      deleteProduct: 'DELETE /api/products/:id',
      getByCategory: 'GET /api/products/category/:category'
    },
    timestamp: new Date().toISOString()
  });
});

// Handle undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('❌ Server error:', error);
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
  }
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// ✅ Vercel-এর জন্য export
export default app;