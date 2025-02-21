import { useContext, useState } from "react"
import { Context as TodoContext } from "@/context/todoListContext"
import { Itodo } from "@/interfaces/todo"

const UpdateTodo = ()=>{

    const todoContext = useContext(TodoContext)
    const {updateTodo,todoList,updateTodoStatus} = todoContext

    const [newTitle , setNewTitle] = useState(todoList.find((item:Itodo) => item.id === updateTodoStatus.id)?.title ?? "")

    return(
        <div className="flex items-center gap-4">
            <input className="bg-white text-black" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)}/>
            <button className="p-2 border border-green-200" onClick={()=> updateTodo(newTitle)}>update</button>
        </div>
    )
}

export default UpdateTodo