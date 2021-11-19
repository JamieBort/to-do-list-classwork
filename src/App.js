// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
	const [ todoList, setTodoList ] = useState([ JSON.parse(localStorage.getItem('savedTodoList')) ]);
	// console.log(localStorage.getItem('savedTodoList'));

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, newTodo ]);
	};

	useEffect(
		() => {
			localStorage.setItem('savedTodoList', JSON.stringify(todoList));
		},
		[ todoList ],
	);

	return (
		<div>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} /> {/* A function gets passed into AddTodoForm. */}
			<TodoList todoList={todoList} /> {/* An array (of objects) gets passed into TodoList. */}
		</div>
	);
}

export default App;
