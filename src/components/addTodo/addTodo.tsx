import { useContext, useState } from "react"
import { Context as TodoContext } from "@/context/todoListContext"

const AddTodo = ()=>{
    const [title , setTitle] = useState("")
    const todoContext = useContext(TodoContext)
    const {addNewTodo} = todoContext
    return(
        <div className="flex items-center gap-4">
            <input className="bg-white text-black" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <button className="p-2 border border-green-200" onClick={()=> addNewTodo(title)}>add</button>
        </div>
    )
}

export default AddTodo