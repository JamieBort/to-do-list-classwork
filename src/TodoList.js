// src/TodoList.js

import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
	// console.log('todoList: ', todoList);
	// if todoList.length === 0 return <h1>Get started by creating your first Todo!</h1>. else todolist.map(etc....)
	if (todoList.length === 0) return <p>Get started by creating your first Todo!</p>;
	else
		return (
			<div>
				<p>
					<strike>Get started by creating your first Todo!</strike>
				</p>
				<ul>
					<TodoListItem list={todoList} /> {/* An array (of objects) gets passed into TodoListItem. */}
				</ul>
			</div>
		);
}

export default TodoList;
