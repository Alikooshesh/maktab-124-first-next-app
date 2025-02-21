'use client'

import { Itodo } from "@/interfaces/todo"
import axios from "axios"
import { createContext, ReactNode, useEffect, useState } from "react"

interface Iprops{
    children : ReactNode
}

interface IupdateTodoStatus {
    updateMode: boolean,
    id: null | string
}

export const Context = createContext<any>(null)

const TodoListContext = ({children}:Iprops)=>{

    const [todoList, setTodoList] = useState<Itodo[]>([])
    const [updateTodoStatus, setUpdateTodoStatus] = useState<IupdateTodoStatus>({
        updateMode: false,
        id: null
    })

    function setTodoForUpdate(id: string) {
        setUpdateTodoStatus({
            updateMode: true,
            id
        })
    }

    async function getTodoList() {
        const result = await axios.get('https://66d1843962816af9a4f3ec69.mockapi.io/todo')
        const data = result.data
        setTodoList(data)
    }

    async function deleteTodo(id: string) {
        try {
            const result = await axios.delete(`https://66d1843962816af9a4f3ec69.mockapi.io/todo/${id}`)
            let tempTodoList = todoList
            tempTodoList = tempTodoList.filter(item => item.id !== id)
            setTodoList(tempTodoList)
        }
        catch (err) {
            console.log(err)
        }
    }

    async function addNewTodo(title: string) {
        try {
            const result = await axios.post('https://66d1843962816af9a4f3ec69.mockapi.io/todo', { title })
            const data = result.data

            setTodoList([...todoList, data])
        }
        catch (err) {
            console.log(err)
        }
    }

    async function updateTodo(newTitle: string) {
        if (updateTodoStatus.updateMode) {
            try {
                const result = await axios.put(`https://66d1843962816af9a4f3ec69.mockapi.io/todo/${updateTodoStatus.id}`, {
                    title: newTitle
                })
                let tempTodoList = todoList
                let finder = tempTodoList.find(item => item.id === updateTodoStatus.id)
                finder ? finder.title = newTitle : null
                setTodoList(tempTodoList)
                setUpdateTodoStatus({
                    updateMode: false,
                    id: null
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        getTodoList()
    }, [])

    return(
        <Context.Provider value={{updateTodo , setTodoForUpdate , deleteTodo, addNewTodo , updateTodoStatus , todoList}}>
            {children}
        </Context.Provider>
    )
}

export default TodoListContext