import mongoose from "mongoose";

const connectDb = async (database) =>{
    try {
        await mongoose.connect(database)
        console.log("database connected successfully")
    } catch (error) {
        console.log(error)
    }
}


export default connectDb;