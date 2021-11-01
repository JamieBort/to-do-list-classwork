// src/TodoListItem.js

import React from "react";

function TodoListItem(props) {
    return (
        <div>
            {/* <ul>{props.list.map((item) => <li key={item.uniqueIdentifier}>{item.title}</li>)}</ul> */}
            <ul>{props.list.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
        </div>
    );
}

export default TodoListItem;