import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import umrahRoutes from "./Routes/umrahRoutes.js"


dotenv.config(); // .env file load করবে
// server 
const server = express()
const port = process.env.PORT
const database_url = process.env.database_url
// JSON parsing middleware
server.use(cors());
server.use(express.json({ limit: "10mb" })); // <-- increase this
server.use(express.urlencoded({ limit: "10mb", extended: true }));

// API routes
server.use("/api/umrah", umrahRoutes);

// Home route
server.get("/", (req, res) => {
  res.send("Hello World! Server is Up 🚀");
})

connectDb(database_url)

server.listen(port , () => {
    console.log(`server created successfully on port: ${port}`)
})



