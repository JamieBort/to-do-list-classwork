// src/AddTodoForm.js

import React from "react";

function AddTodoForm(props) {
    const handleAddTodo = event => {
        event.preventDefault();
        const todoTitle = event.target.todoTitle.value;
        console.log("todoTitle: ", todoTitle);
        props.onAddTodo(event.target.todoTitle.value);
        event.target.todoTitle.value="";
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">
                    Title:
                </label>
                <input id="todoTitle" name="title">
                </input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;