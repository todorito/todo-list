import React, { useState, useRef, useEffect } from "react";

const TodoForm = function (props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");
    const submit = function (e) {
        e.preventDefault();
        if (props.addTodo) {
            props.addTodo(input);
        }
        if (props.onSubmit) {
            props.onSubmit(input);
        }
        setInput("");
    };

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    })

    const inputChange = function (e) {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={submit} className="todo-form">
            {props.edit ? (
                <><input
                    type="text"
                    placeholder="Update your note"
                    value={input}
                    onChange={inputChange}
                    className="form-input"
                    name="text"
                    ref={inputRef} />
                    <button className="btn--add">Update</button>
                </>
            ) : (
                <><input
                    type="text"
                    placeholder="Add your note"
                    value={input}
                    onChange={inputChange}
                    className="form-input"
                    name="text"
                    ref={inputRef}
                />
                    <button className="btn--add">Add</button>
                </>
            )}
        </form>
    );
};

export default TodoForm;