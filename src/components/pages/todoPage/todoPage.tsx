'use client'

import AddTodo from "@/components/addTodo/addTodo"
import Todo from "@/components/todo/todo"
import UpdateTodo from "@/components/updateTodo/updateTodo"
import { Context as TodoContext } from "@/context/todoListContext"
import { Itodo } from "@/interfaces/todo"
import { useContext } from "react"

const TodoPageContent = () => {

    const todoContext = useContext(TodoContext)
    const {updateTodoStatus , updateTodo , todoList , addNewTodo , deleteTodo , setTodoForUpdate} = todoContext

    return (
        <div className="flex flex-col gap-2">
            {updateTodoStatus.updateMode ?
                <UpdateTodo
                    updateTodo={updateTodo}
                    currentTitle={todoList.find((item:Itodo) => item.id === updateTodoStatus.id)?.title ?? ""}
                /> :
                <AddTodo addTodo={addNewTodo} />
            }
            {todoList.map((todo:Itodo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    deleteFunction={deleteTodo}
                    setToUpdateMode={setTodoForUpdate}
                />
            ))}
        </div>
    )
}

export default TodoPageContent