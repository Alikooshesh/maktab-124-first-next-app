import { Itodo } from "@/interfaces/todo"
import { useContext } from "react"
import { Context as TodoContext } from "@/context/todoListContext"

const Todo = ({title,id}:Itodo)=>{

    const todoContext = useContext(TodoContext)
    const {deleteTodo,setTodoForUpdate} = todoContext

    return(
        <div className="p-4 flex items-center gap-4 border border-white">
            <p className="text-white">{title}</p>
            <button className="border border-red-500 p-2" onClick={()=> deleteTodo(id)}>delete</button>
            <button className="border border-red-500 p-2" onClick={()=> setTodoForUpdate(id)}>Edit</button>
        </div>
    )
}

export default Todo