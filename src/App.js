// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
	const [ todoList, setTodoList ] = useState([]);
	// console.log(localStorage.getItem('savedTodoList'));

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, newTodo ]);
	};

	useEffect(
		() => {
			if (todoList.length > 0) {
				console.log('todoList is not empty', todoList);
				localStorage.setItem('savedTodoList', JSON.stringify(todoList));
			} else console.log('todoList is empty', todoList);
		},
		[ todoList ],
	);

	useEffect(() => {
		if (localStorage.getItem('savedTodoList') === null)
			console.log('local storage is empty ', localStorage.getItem('savedTodoList'));
		else {
			console.log('local is not empty ', localStorage.getItem('savedTodoList'));
			setTodoList(JSON.parse(localStorage.getItem('savedTodoList')));
		}
	}, []);

	if (localStorage.getItem('savedTodoList') === null)
		console.log('local storage is empty 2', localStorage.getItem('savedTodoList'));
	else console.log('local storage is not empty 2', localStorage.getItem('savedTodoList'));

	return (
		<div>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} /> {/* A function gets passed into AddTodoForm. */}
			<TodoList todoList={todoList} /> {/* An array (of objects) gets passed into TodoList. */}
		</div>
	);
}

export default App;
