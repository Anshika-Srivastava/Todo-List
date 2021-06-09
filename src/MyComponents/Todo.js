import React from 'react'

export const Todo = ({todo,onDelete}) => {
    let TodoStyle = {
        width: "20rem",
        margin: "20px 2px",
        border: "2.5px solid crimson"
    }
    return (
        <>
        <div className="card" style={TodoStyle}>
            <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
            </div>
        </div>
        </>
    )
}
