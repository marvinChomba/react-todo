import React from "react"
import DisplayTodo from "./Display"


const AllTodos = (props) => {
    return (
        props.todos.map((todo, i) => {
            return <DisplayTodo title={todo.title} key={todo.id} remove={props.deleteTodoHandler.bind(this, i)} />
        })
    )
}

export default AllTodos