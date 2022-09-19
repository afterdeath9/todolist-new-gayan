import React from 'react'
import { MdDelete } from "react-icons/md"
import { BiCheckCircle } from "react-icons/bi"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <button style={{color:"#FFD700"}} onClick={() => importantTodo(todo.id)} className="important-btn">!</button>
                <MdDelete style={{ marginRight: 5 ,color:"#B22222"}} onClick={() => removeTodo(todo.id)}/>
             <BiCheckCircle style={{color:"#4169E1"}} onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    )
}