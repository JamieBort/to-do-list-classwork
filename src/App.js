// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
function App() {
	const [ todoList, setTodoList ] = useState([]);

	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		new Promise((resolve, reject) =>
			setTimeout(
				() =>
					resolve({
						data: {
							todoList: JSON.parse(localStorage.getItem('savedTodoList')),
						},
					}),
				2000,
			),
		).then((result) => {
			setTodoList(result.data.todoList);
			setIsLoading(false);
		});
	}, []);

	// This saves the list in local storage (in the browser).
	useEffect(
		() => {
			if (!isLoading) {
				if (todoList.length > 0) {
					console.log('todoList is not empty', todoList);
					localStorage.setItem('savedTodoList', JSON.stringify(todoList));
				} else console.log('todoList is empty', todoList);
			}
		},
		[ todoList ],
	);

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
			{isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}

			{/* <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> */}
		</React.Fragment>
	);
}

export default App;
