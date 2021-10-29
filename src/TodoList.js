// src/TodoList.js

import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    {
        uniqueIdentifier: 1,
        title: "The Bad Guys in Attack of the Zittens",
    },
    {
        uniqueIdentifier: 2,
        title: "Knuffle Bunny : a cautionary tale",
    },
    {
        uniqueIdentifier: 3,
        title: "Far from home",
    },
];

function TodoList() {
    return (
        <div>
            {/* <ul>{todoList.map((item) => <li key={item.uniqueIdentifier}>{item.title}</li>)}</ul> */}
            <ul>
                <TodoListItem list={todoList}/>
            </ul>
        </div>
    )
}

export default TodoList;