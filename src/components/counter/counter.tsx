'use client'

import { getAllTodo } from "@/redux/reducers/todoReducer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = ()=>{
    const dispatch = useDispatch()

    const x = useSelector((state:any)=> state.todo)

    const [count , setCount] = useState(0)

    useEffect(()=>{
        dispatch(getAllTodo())
    },[dispatch])

    return(
        <div>
            {console.log(x)}
            <button onClick={()=> setCount(count-1)}>-</button>
            <p>{count}</p>
            <button onClick={()=> setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter