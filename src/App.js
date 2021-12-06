// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const useSemiPersistentState = () => {
	const [ todoList, setTodoList ] = useState([]);
	// This saves the list in local storage (in the browser).
	useEffect(
		() => {
			if (todoList.length > 0) {
				console.log('todoList is not empty', todoList);
				localStorage.setItem('savedTodoList', JSON.stringify(todoList));
			} else console.log('todoList is empty', todoList);
		},
		[ todoList ],
	);

	// Now your list is saved in Local Storage, but when you refresh the page it disappears.
	// This is because we wrote the list data to Local Storage but we aren't reading it when the application is rendered. Let's fix that:
	useEffect(() => {
		if (localStorage.getItem('savedTodoList') === null)
			console.log('local storage is empty: ', localStorage.getItem('savedTodoList'));
		else {
			console.log('local storage is not empty: ', localStorage.getItem('savedTodoList'));
			setTodoList(JSON.parse(localStorage.getItem('savedTodoList')));
		}
	}, []);
	// Add a return statement in useSemiPersistentState that returns the todoList state variable and setter in an Array (just like how it's returned from the useState hook)
	return [ todoList, setTodoList ];
};

function App() {
	const [ todoList, setTodoList ] = useSemiPersistentState();

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, newTodo ]);
	};

	// Define a new handler function named removeTodo with parameter id
	const removeTodo = (the_id) => {
		// console.log('todoList: ', todoList);
		todoList.forEach((element) => {
			if (element.id === the_id) {
				// console.log('element: ', element);
				// console.log('element.id: ', element.id);
				// console.log('the_id: ', the_id);
				const newTodoList = todoList.filter((abc) => abc.id !== the_id);
				console.log('newTodoList: ', newTodoList);
				setTodoList(newTodoList); // pass the modified array
			}
		});
	};

	return (
		<React.Fragment>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
		</React.Fragment>
	);
}

export default App;
