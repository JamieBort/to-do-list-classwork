// src/TodoList.js

import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {
	// console.log('todoList: ', todoList);
	if (todoList.length === 0) return <p>Get started by creating your first Todo!</p>;
	else
		return (
			<div>
				<p>
					<strike>Get started by creating your first Todo!</strike>
				</p>
				<ul>
					<TodoListItem list={todoList} removeTodo={onRemoveTodo} />
				</ul>
			</div>
		);
}

export default TodoList;
