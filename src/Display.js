import React from "react"

const DisplayTodo = ({title,remove}) => {
    return (
        <div>
            <p>{title}</p>
            <button onClick = {remove} >Delete</button>
        </div>
    )
}

export default DisplayTodo