import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
})

const connectDB=async()=>{
    try{
     const databaseInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
     console.log(`Database Connected : ${databaseInstance.connection.host}`);

    }catch(err){
      console.log(`Database Connection Error : ${err}`);
      process.exit(1);
      
    }
}

export default connectDB;