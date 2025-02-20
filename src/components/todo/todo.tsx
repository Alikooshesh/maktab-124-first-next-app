import { Itodo } from "@/interfaces/todo"

interface Iprops extends Itodo{
    deleteFunction : Function
} 

const Todo = ({title,id,deleteFunction}:Iprops)=>{
    return(
        <div className="p-4 flex items-center gap-4 border border-white">
            <p className="text-white">{title}</p>
            <button className="border border-red-500 p-2" onClick={()=> deleteFunction(id)}>delete</button>
        </div>
    )
}

export default Todo