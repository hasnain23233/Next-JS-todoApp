import mongoose  from 'mongoose'

const mongoDB: any = process.env.MONGODB_URI;

const DataBaseConnection = async ()=>{
    try {
        if(mongoose.connections[0].readyState){
            console.log("MongoDB already connected")
            return
        }
        await mongoose.connect(mongoDB)
        console.log("MongoDB connected successfully ")
    } catch (error : any) {
        console.log("MongoDB connection failed:", error.message)
    }
}
export default DataBaseConnection