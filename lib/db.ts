import mongoose  from 'mongoose'

const mongoDB: string = process.env.MongoDB!;

const DataBaseConnection = async ()=>{
    try {
        if(mongoose.connections[0].readyState){
            console.log("MongoDB already connected")
            return
        }
        if(!mongoDB){
            console.log('MONGODB_URI not found in environment')
            return
        }
        await mongoose.connect(mongoDB)
        console.log("MongoDB connected successfully ")
    } catch (error : any) {
        console.log("MongoDB connection failed:", error.message)
    }
}
export default DataBaseConnection