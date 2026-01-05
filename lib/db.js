import mongoose from 'mongoose'

const mongoDB = process.env.MONGODB_URI;

const DataBaseConnection = async ()=>{
    try {
        if(mongoose.connectionsl[0].readyState){
            console.log("MongoDB already connected")
            return
        }
        await mongoose.connect(mongoDB)
        console.log("MongoDB connected successfully ")
    } catch (error) {
        console.log("MongoDB connection failed:", error.message)
    }
}
export default DataBaseConnection