// src/AddTodoForm.js

// import React from "react";
import React, { useState } from 'react';

function AddTodoForm(props) {

    const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = event => {
        // const newTodoTitle = event.target.secondInput.value;

        const newTodoTitle = event.target.value;
        console.log("newTodoTitle: ", newTodoTitle);
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = event => {
        event.preventDefault();
        // const todoTitle = event.target.todoTitle.value;

        console.log("todoTitle: ", todoTitle);

        // props.onAddTodo(event.target.todoTitle.value);

        // props.onAddTodo(todoTitle);

        props.onAddTodo({
            title: todoTitle,
            id: Date.now(),
        }
        );

        // event.target.value = "";

        setTodoTitle("");
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">
                    Title:
                </label>
                {/* <input id="todoTitle" name="title"></input> */}

                <input value={todoTitle} onChange={handleTitleChange}></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;