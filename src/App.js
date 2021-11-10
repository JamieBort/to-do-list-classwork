// src/App.js

import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
	const [ todoList, setTodoList ] = useState([
		{
			title: 'First item: beans',
			id: 1,
		},
		{
			title: 'Second item: tacos',
			id: 2,
		},
		{
			title: 'Third item: cheese',
			id: 3,
		},
	]);

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, newTodo ]);
	};
	console.log('todoList: ', todoList);
	return (
		<div>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} /> {/* A function gets passed into AddTodoForm. */}
			<TodoList todoList={todoList} /> {/* An array (of objects) gets passed into TodoList. */}
		</div>
	);
}

export default App;
