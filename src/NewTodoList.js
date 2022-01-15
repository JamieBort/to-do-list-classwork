// src/TodoList.js

import React from 'react';
import NewTodoListItem from './NewTodoListItem';

function NewTodoList({ newTodoList, onRemoveTodo }) {
	console.log('newTodoList: ', newTodoList);
	// return <p>temp</p>;
	if (newTodoList.length === 0) return <p>Get started by creating your first Todo!</p>;
	else
		return (
			<div>
				<p>
					<strike>Get started by creating your first Todo!</strike>
				</p>
				{/* <ul>
					<TodoListItem list={todoList} removeTodo={onRemoveTodo} />
				</ul> */}
				<ul>
					<NewTodoListItem newList={newTodoList} removeTodo={onRemoveTodo} />
				</ul>
			</div>
		);
}

export default NewTodoList;
