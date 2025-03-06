'use client'

import { Itodo } from "@/interfaces/todo"
import { deleteTodo, getAllTodo } from "@/redux/reducers/todoReducer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = ()=>{
    const dispatch = useDispatch()

    const {loading,error,data} = useSelector((state:any)=> state.todo)

    const [count , setCount] = useState(0)

    function deleteButtonHandler(id:string){
        dispatch(deleteTodo({id}))
    }

    useEffect(()=>{
        dispatch(getAllTodo())
    },[dispatch])

    if(loading){
        return <p>is loading ...</p>
    }

    if(error){
        return <p>there is an error, try again later</p>
    }

    return(
        <div>
            <button onClick={()=> setCount(count-1)}>-</button>
            <p>{count}</p>
            <button onClick={()=> setCount(count+1)}>+</button>
            <hr/>
            {data.map((item:Itodo) => <div>
                <p>{item.title}</p>
                <button onClick={()=>deleteButtonHandler(item.id)}>delete</button>
            </div>)}
        </div>
    )
}

export default Counter