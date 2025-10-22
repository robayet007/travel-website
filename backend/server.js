import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';

// ES Module এ __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: 'dlfm2aqhc',
  api_key: '759567457719666',
  api_secret: 'doUZk7ZTa3w5SJehy0dwdAPssEM',
  secure: true
});

// CORS
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MULTER CONFIGURATION (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// MONGODB URI
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mohammadrobayet009_db_user:IlrLmx5F6iUVSLRY@cluster0.a9bbtmw.mongodb.net/admin_dashboard?retryWrites=true&w=majority&appName=Cluster0";

// Global connection variable
let cachedDb = null;

// Connection function
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
  image: { type: String, default: '' },
  cloudinaryId: { type: String, default: '' } // ✅ Cloudinary ID store করবো
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// ✅ Cloudinary Upload Helper Function
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'travel-products',
        resource_type: 'auto'
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    
    uploadStream.end(fileBuffer);
  });
};

// ✅ Cloudinary Delete Helper Function
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
};

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

// ✅ CREATE PRODUCT WITH CLOUDINARY UPLOAD
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    await connectDB();
    
    const { title, category, price, offerPrice, features } = req.body;

    if (!title || !category || !price || !offerPrice) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields required (title, category, price, offerPrice)' 
      });
    }

    // ✅ Parse features
    let parsedFeatures = [];
    if (features) {
      try {
        parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;
      } catch (e) {
        parsedFeatures = Array.isArray(features) ? features : [features];
      }
    }

    let imageUrl = '';
    let cloudinaryId = '';

    // ✅ যদি image upload করা হয়
    if (req.file) {
      try {
        const result = await uploadToCloudinary(req.file.buffer);
        imageUrl = result.secure_url;
        cloudinaryId = result.public_id;
        console.log('✅ Image uploaded to Cloudinary:', imageUrl);
      } catch (uploadError) {
        console.error('❌ Cloudinary upload failed:', uploadError);
        return res.status(500).json({
          success: false,
          message: 'Image upload failed',
          error: uploadError.message
        });
      }
    }

    const newProduct = new Product({
      title: title.trim(),
      category: category.trim(),
      price: Number(price),
      offerPrice: Number(offerPrice),
      features: parsedFeatures,
      image: imageUrl,
      cloudinaryId: cloudinaryId
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

// ✅ UPDATE PRODUCT WITH CLOUDINARY
app.put('/api/products/:id', upload.single('image'), async (req, res) => {
  try {
    await connectDB();
    
    const { id } = req.params;
    const { title, category, price, offerPrice, features } = req.body;

    // Find existing product
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Parse features
    let parsedFeatures = existingProduct.features;
    if (features) {
      try {
        parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;
      } catch (e) {
        parsedFeatures = Array.isArray(features) ? features : [features];
      }
    }

    // Update data
    const updateData = {
      title: title || existingProduct.title,
      category: category || existingProduct.category,
      price: price ? Number(price) : existingProduct.price,
      offerPrice: offerPrice ? Number(offerPrice) : existingProduct.offerPrice,
      features: parsedFeatures
    };

    // ✅ যদি নতুন image upload হয়
    if (req.file) {
      try {
        // পুরনো image Cloudinary থেকে delete করুন
        if (existingProduct.cloudinaryId) {
          await deleteFromCloudinary(existingProduct.cloudinaryId);
          console.log('✅ Old image deleted from Cloudinary');
        }

        // নতুন image upload করুন
        const result = await uploadToCloudinary(req.file.buffer);
        updateData.image = result.secure_url;
        updateData.cloudinaryId = result.public_id;
        console.log('✅ New image uploaded to Cloudinary');
        
      } catch (uploadError) {
        console.error('❌ Cloudinary upload failed:', uploadError);
        return res.status(500).json({
          success: false,
          message: 'Image update failed',
          error: uploadError.message
        });
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

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

// ✅ DELETE PRODUCT WITH CLOUDINARY
app.delete('/api/products/:id', async (req, res) => {
  try {
    await connectDB();
    
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // ✅ Cloudinary থেকে image delete করুন
    if (product.cloudinaryId) {
      try {
        await deleteFromCloudinary(product.cloudinaryId);
        console.log('✅ Image deleted from Cloudinary');
      } catch (deleteError) {
        console.error('❌ Cloudinary delete failed:', deleteError);
        // Continue with product deletion even if image delete fails
      }
    }

    await Product.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Product deleted successfully',
      data: product
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

// Test Cloudinary Connection
app.get('/test-cloudinary', async (req, res) => {
  try {
    // Simple test to check Cloudinary connection
    const result = await cloudinary.api.ping();
    res.json({
      success: true,
      message: '✅ Cloudinary connected successfully!',
      cloudinary: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '❌ Cloudinary connection failed',
      error: error.message
    });
  }
});

// MongoDB Status Check
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
    message: '🛍️ Travel Admin API with Cloudinary is running!',
    endpoints: {
      test: 'GET /test',
      mongodbStatus: 'GET /mongodb-status',
      cloudinaryTest: 'GET /test-cloudinary',
      getAllProducts: 'GET /api/products',
      createProduct: 'POST /api/products (with Cloudinary upload)',
      updateProduct: 'PUT /api/products/:id (with Cloudinary upload)',
      deleteProduct: 'DELETE /api/products/:id'
    }
  });
});

// Local development only
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`☁️  Cloudinary configured for: dlfm2aqhc`);
  });
}

export default app;