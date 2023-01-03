import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import React, { useState } from "react";
import "./App.css";

const App = function () {
    // const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const addTodo = function (text) {
        let id = 1;
        if (todos.length > 0) {
            id = todos[0].id + 1
            console.log(id)
        }
        let todo = { id: id, text: text }
        console.log(todo)
        setTodos([todo, ...todos])
    }

    return (<div className="container">
        <h1 className="heading">Todo-rito List</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => {
            return (<TodoItem todo={todo} />)
        })}
    </div>)
}

export default App;