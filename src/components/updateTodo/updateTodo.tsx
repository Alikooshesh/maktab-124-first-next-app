import { useState } from "react"

interface Iprops{
    currentTitle : string
    updateTodo : Function
}

const UpdateTodo = ({currentTitle,updateTodo}:Iprops)=>{
    const [newTitle , setNewTitle] = useState(currentTitle ?? "")
    return(
        <div className="flex items-center gap-4">
            <input className="bg-white text-black" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)}/>
            <button className="p-2 border border-green-200" onClick={()=> updateTodo(newTitle)}>update</button>
        </div>
    )
}

export default UpdateTodo