import Todo , {ITodo} from '@/model/todo'
import ConnectDB from '@/lib/db'

export const getTodoes = async (): Promise<ITodo[]> =>{
    await ConnectDB();
    return await Todo.find()
}

export const createTodoes = async (data: Partial<ITodo>):Promise<ITodo> =>{
    await ConnectDB();
    return await Todo.create(data);
}