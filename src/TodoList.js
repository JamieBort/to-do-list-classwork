// src/TodoList.js

import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
    return (
        <div>
            {/* <ul>{todoList.map((item) => <li key={item.uniqueIdentifier}>{item.title}</li>)}</ul> */}
            <ul>
                <TodoListItem list={todoList} />
            </ul>
        </div>
    )
}

export default TodoList;