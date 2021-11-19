// src/TodoList.js

import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
	console.log(todoList);
	return (
		<div>
			<ul>
				<TodoListItem list={todoList} /> {/* An array (of objects) gets passed into TodoListItem. */}
			</ul>
		</div>
	);
}

export default TodoList;
