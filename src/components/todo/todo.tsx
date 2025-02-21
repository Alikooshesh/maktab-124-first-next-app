import { Itodo } from "@/interfaces/todo"

interface Iprops extends Itodo{
    deleteFunction : Function,
    setToUpdateMode : Function
} 

const Todo = ({title,id,deleteFunction,setToUpdateMode}:Iprops)=>{
    return(
        <div className="p-4 flex items-center gap-4 border border-white">
            <p className="text-white">{title}</p>
            <button className="border border-red-500 p-2" onClick={()=> deleteFunction(id)}>delete</button>
            <button className="border border-red-500 p-2" onClick={()=> setToUpdateMode(id)}>Edit</button>
        </div>
    )
}

export default Todo