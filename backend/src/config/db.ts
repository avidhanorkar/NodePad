import mongoose from "mongoose"


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB as string);
        console.log("Mongo DB Connected Successfully");

    } catch (error) {
        console.log("Error in connecting MongoDB " + error);
        process.exit(1);
    }
}

export default connectDB;