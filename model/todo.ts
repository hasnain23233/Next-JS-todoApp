import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description : {
            type: String,
            require: true
        },
        complete : {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
)

export default mongoose.model("Todo" , todoSchema)