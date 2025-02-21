
import TodoPageContent from "@/components/pages/todoPage/todoPage"
import TodoListContext from "@/context/todoListContext"

export default function TodoPage() {

    return (
        <>
            <h1>its todo list page</h1>
            <TodoListContext>
                <TodoPageContent />
            </TodoListContext>
        </>
    )
}