
import mongoose from 'mongoose';

const connectDB = async () => {
    try{
       
       
        const connect = mongoose.connect(process.env.MONGO_URI);
    


    } catch(err){


        console.log(err.message);
    }




}


export default connectDB;