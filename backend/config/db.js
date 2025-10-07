import mongoose from "mongoose";

const connectDb = async (database_url) =>{
    try {
        await mongoose.connect(database_url)
        console.log("database connected successfully")
    } catch (error) {
        console.log(error)
    }
}


export default connectDb;