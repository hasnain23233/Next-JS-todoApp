import mongoose , {Document , Model , Schema} from 'mongoose';

export interface ITodo extends Document {
    title: string,
    description: string,
    complete: boolean 

}

const  TodoSchema: Schema = new Schema<ITodo>(
    {
        title: {
            type: String , 
            required: true
        },
        description: {
            type: String,
            required: true
        },
        complete: { type: Boolean, default: false }
    },
    {timestamps: true}
)
const Todo: Model<ITodo> =  mongoose.models.Todo || mongoose.model<ITodo>("Todo" , TodoSchema)
export default Todo