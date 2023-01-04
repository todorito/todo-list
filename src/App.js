import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import React, { useState, useEffect } from "react";
import "./App.css";

const arrayOfImages = ['https://www.wowpatterns.com/assets/files/resource_images/seamless-pattern-colorful-fish-blue-wave-background.jpg',
    'https://img.freepik.com/free-vector/sea-waves-vector-seamless-abstract-hand-drawn-pattern-wallpaper_1284-42923.jpg?w=740&t=st=1672751020~exp=1672751620~hmac=c9da1936f5b640079ab3babea5026b722e387e6fa7f163d7ba43000a1ab39f86',
    'https://img.freepik.com/free-vector/pattern-with-hand-drawn-fishes_1076-87.jpg?w=740&t=st=1672751129~exp=1672751729~hmac=394578742f36cd30b36256956d0aa0bc9c78aeb6241df5834ae61f9794acfa1e',
    'https://img.freepik.com/free-vector/seafood-fish-chalkboard-seamless-background-pattern-black-with-white-line-drawings-fish-calamari-lobster-crab-sushi-shrimp-prawn-mussel-salmon-steak-herbs_1284-44102.jpg?w=740&t=st=1672751327~exp=1672751927~hmac=5dff486cfe524ae64dfaaeef4319af6539db885944c82c45ecdca4e3d46d8e48',
    'https://img.freepik.com/free-vector/blue-sea-waves-seamless-pattern-vector-illustration-design_1284-42784.jpg?w=740&t=st=1672751485~exp=1672752085~hmac=9fd3df2c502a49eeb80621536039f4ae81ba76a7764596ab3e1cab7474ee7be0',
    "https://images6.alphacoders.com/838/838426.jpg",
    "https://i.pngimg.me/thumb/f/720/comvecteezy164103.jpg",
    "https://img.freepik.com/free-vector/vintage-nautical-elements-seamless-pattern_225004-989.jpg?w=740&t=st=1672828993~exp=1672829593~hmac=7d6628348bd89e7a18f27164989c8137f5f54855216f467d36583d23e377d651",
    "https://img.freepik.com/free-vector/flat-design-coral-pattern_23-2148676483.jpg?w=740&t=st=1672829032~exp=1672829632~hmac=5c2e298f186d6763f576b9e553774fec1f63c103dd034af27102663a1f31bc3f",
    "https://img.freepik.com/free-vector/hand-drawn-whales-dolphins-pattern_1191-469.jpg?w=740&t=st=1672829207~exp=1672829807~hmac=70113ed6861f9383350d95e352431a4dd4125bae7db3dd1eb71edec4242c2162",
    "https://img.freepik.com/premium-vector/seamless-pattern-with-colorful-fish-yellow-background_327997-29.jpg?w=740"
];

const randomImage = Math.floor(Math.random() * arrayOfImages.length);
document.body.style.backgroundImage = `url(${arrayOfImages[randomImage]})`;

const App = function () {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("notes")) || []);

    const addTodo = function (text) {
        let id = 1;
        if (todos.length > 0) {
            id = todos[0].id + 1
        }
        let todo = { id: id, text: text }
        setTodos([todo, ...todos])
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = function (id) {
        let newTodos = [...todos].filter((todo) => { return todo.id !== id });
        setTodos(newTodos);
    }

    // const editTodo = function (obj) {
    //     console.log(obj.id);
    //     console.log(obj);
    //     console.log(obj.value);
    //     setTodos(prevTodo => prevTodo.map(todo => (todo.id === obj.id ? obj.value : todo)));
    // }

    const checkTodo = function (id) {
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (<div className="container">
        <h1 className="heading">Todo-rito List</h1>
        <TodoForm addTodo={addTodo}
        // editTodo={editTodo} 
        />
        {todos.map((todo) => {
            return (<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} completed={false}
            // editTodo={editTodo} 
            />)
        })}
    </div>)
}

export default App;