import { useState } from "react"

interface Iprops{
    addTodo : Function
}

const AddTodo = ({addTodo}:Iprops)=>{
    const [title , setTitle] = useState("")
    return(
        <div className="flex items-center gap-4">
            <input className="bg-white text-black" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <button className="p-2 border border-green-200" onClick={()=> addTodo(title)}>add</button>
        </div>
    )
}

export default AddTodo