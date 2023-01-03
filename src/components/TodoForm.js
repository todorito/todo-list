import React, { useState } from "react";

const TodoForm = function (props) {
    const [input, setInput] = useState("");
    const submit = function (e) {
        e.preventDefault();
        // props.onSubmit({
        //     id: input,
        //     text: input
        // });
        props.addTodo(input);
        setInput("");
    }

    const inputChange = function (e) {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={submit} className="todo-form">
            <input type="text" placeholder="Add your note" value={input} onChange={inputChange} className="form-input"/>
            <button className="btn--add">Add</button>
        </form>
    )
}

export default TodoForm;