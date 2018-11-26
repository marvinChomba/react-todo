import React from "react"

const AddTodo = ({addTodo}) => {
    return (
    <form onSubmit = {addTodo}>
        <input name = "todo" type="text"/>
        <input type="submit" value="Add"/>
    </form>)
}

export default AddTodo