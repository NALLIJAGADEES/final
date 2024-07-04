import mongoose from "mongoose";


const connectDB = async () => {
  console.log("a")
  const url ="mongodb+srv://Nalli:Nalli123@cluster0.ehhmtay.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  
  try {
    console.log("b")
    await mongoose.connect(url);
    console.log("db is connected");
  } catch (error) {
    console.error("error connecting to mongo", error);
  }
};

export default connectDB;
