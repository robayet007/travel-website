import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import umrahRoutes from "./Routes/umrahRoutes.js"
const server = express()
const port = process.env.PORT || 5000;
const database_url = process.env.database_url || "mongodb+srv://mohammadrobayet009_db_user:vkWbkhEYvOaGuv9i@cluster0.a9bbtmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// dotenv.config(); // .env file load করবে
// JSON parsing middleware
server.use(cors());
server.use(express.json({ limit: "10mb" })); // <-- increase this
server.use(express.urlencoded({ limit: "10mb", extended: true }));

// API routes
server.use("/api/umrah", umrahRoutes);

// Home route
server.get("/", (req, res) => {
  res.send("Hello World!");
})

connectDb(database_url)

server.listen(port , () => {
    console.log(`server created successfully on port: ${port}`)
})



