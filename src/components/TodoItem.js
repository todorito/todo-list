import React, { useState } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TodoForm from "./TodoForm";

const TodoItem = function (props) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitEdit = function (value) {
        props.editTodo({ id: edit.id, value });
        setEdit({ id: null, value: "" });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }
    return (
        <div className={props.todo.completed ? "completed todo--item" : "todo--item"} >
            <p>{props.todo.text}</p>
            <button className="btn-item">
                <BsCheckSquareFill
                    className="check-btn"
                    onClick={() => props.checkTodo(props.todo.id)}
                />
            </button>
            <button className="btn-item">
                <BiEditAlt
                    className="edit-btn"
                    onClick={() => setEdit({ id: props.todo.id, value: props.todo.text })}
                />
            </button>
            <button className="btn-item">
                <RiDeleteBin6Line
                    className="delete-btn"
                    onClick={() => props.deleteTodo(props.todo.id)}
                />
            </button>
        </div>
    );
};

export default TodoItem;