import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { BsCheckSquareFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem = function (props) {
    // const [todos, setTodos] = useState([]);

    // const addTodo = function (todo) {
    //     const newTodos = [todo, ...todos];
    //     setTodos(newTodos);
    // }

    return (
        <div className="todo--item">
            <p>{props.todo.text}</p>
            <button className="btn-item">
                <BsCheckSquareFill className="check-btn" />

            </button>
            <button className="btn-item">
                <BiEditAlt className="edit-btn" />
            </button>
            <button className="btn-item">
                <RiDeleteBin6Line className="delete-btn" />
            </button>
        </div>
    );
}

export default TodoItem;