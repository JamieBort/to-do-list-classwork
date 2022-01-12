// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
	// const [ todoList, setTodoList ] = useSemiPersistentState();
	const [ todoList, setTodoList ] = useState([]);

	// useEffect(() => {
	// 	new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			console.log('done');
	// 			// resolve({
	// 			// 	data: {
	// 			// 		todoList: todoList,
	// 			// 	},
	// 			// });
	// 			// resolve({
	// 			// 	data: {
	// 			// 		todoList: JSON.parse(localStorage.getItem('savedTodoList')),
	// 			// 	},
	// 			// });
	// 		}, 2000);
	// 	});
	// 	// .then((result)=>{setTodoList(result.data.todoList)});
	// }, []);

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

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, newTodo ]);
	};

	// Define a new handler function named removeTodo with parameter id
	const removeTodo = (id) => {
		// console.log('todoList: ', todoList);
		todoList.forEach((element) => {
			if (element.id === id) {
				// console.log('element:', element, '\nelement.id: ', element.id, '\nid:', id);
				const newTodoList = todoList.filter((item) => item.id !== id);
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
