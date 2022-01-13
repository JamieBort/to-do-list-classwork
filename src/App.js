// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

// const useSemiPersistentState = () => {
// 	const [ todoList, setTodoList ] = useState([]);
// 	// This saves the list in local storage (in the browser).
// 	useEffect(
// 		() => {
// 			if (todoList.length > 0) {
// 				console.log('todoList is not empty', todoList);
// 				localStorage.setItem('savedTodoList', JSON.stringify(todoList));
// 			} else console.log('todoList is empty', todoList);
// 		},
// 		[ todoList ],
// 	);

// 	// Now your list is saved in Local Storage, but when you refresh the page it disappears.
// 	// This is because we wrote the list data to Local Storage but we aren't reading it when the application is rendered. Let's fix that:
// 	useEffect(() => {
// 		if (localStorage.getItem('savedTodoList') === null)
// 			console.log('local storage is empty: ', localStorage.getItem('savedTodoList'));
// 		else {
// 			console.log('local storage is not empty: ', localStorage.getItem('savedTodoList'));
// 			setTodoList(JSON.parse(localStorage.getItem('savedTodoList')));
// 		}
// 	}, []);
// 	// Add a return statement in useSemiPersistentState that returns the todoList state variable and setter in an Array (just like how it's returned from the useState hook)
// 	return [ todoList, setTodoList ];
// };

function App() {
	console.log('Hello');
	console.log(process.env.REACT_APP_AIRTABLE_BASE_ID);
	// const [ todoList, setTodoList ] = useSemiPersistentState();

	const [ todoList, setTodoList ] = useState([]);

	// I didn't need this isLoading useState. However I added it just in case. Instructions from https://github.com/Code-the-Dream-School/ctd-react-canary/wiki/Lesson-1.7#add-loading-state
	const [ isLoading, setIsLoading ] = useState(true);

	// // useEffect to create a side effect for obtaining the data from an api
	// useEffect(() => {
	// 	new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			resolve({
	// 				data: {
	// 					// todoList: todoList,
	// 					todoList: JSON.parse(localStorage.getItem('savedTodoList')),
	// 				},
	// 			});
	// 		}, 2000);
	// 	}).then((result) => {
	// 		console.log('result.data.todoList: ', result.data.todoList);
	// 		setTodoList(result.data.todoList);
	// 		setIsLoading(false);
	// 	});
	// }, []);

	useEffect(() => {
		// 	// fetch(https://api.airtable.com/v0/{BASE_ID}/Default)
		// 	// fetch('https://api.airtable.com/v0/REACT_APP_AIRTABLE_BASE_ID/Default')
		fetch('https://api.airtable.com/v0/app0MBpfNqPynhyk8/Default', {
			headers: { Authorization: 'Bearer keyKK4C8AmdgULejN' },
		}).then((response) => {
			console.log(response.json());
			// console.log(response.json());
		});
		// .then((result) => {
		// 	console.log(result.records);
		// 	// dispatchStories({
		// 	//   type: 'STORIES_FETCH_SUCCESS',
		// 	//   payload: result.hits, // D
		// // )}
		// });

		// 	// GET request using fetch inside useEffect React hook
		// 	fetch('https://api.npms.io/v2/search?q=react')
		// 		.then(response => response.json())
		// 		.then(data => setTotalReactPackages(data.total));

		// // empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);

	// This saves the list in local storage (in the browser).
	useEffect(
		() => {
			// I didn't need this first if() statement. However I added it just in case. Instructions from https://github.com/Code-the-Dream-School/ctd-react-canary/wiki/Lesson-1.7#add-loading-state
			if (!isLoading) {
				if (todoList.length >= 0) {
					console.log('todoList is not empty', todoList);
					localStorage.setItem('savedTodoList', JSON.stringify(todoList));
				} else console.log('todoList is empty', todoList);
			}
		},
		[ todoList, isLoading ],
	);

	// *** This is no longer being used. Because the info in localStorage is being obtained from the "api call" in the useEffect above. ***
	// // Side effect to populate the list from local storage when the page is refreshed.
	// useEffect(() => {
	// 	if (localStorage.getItem('savedTodoList') === null)
	// 		console.log('local storage is empty: ', localStorage.getItem('savedTodoList'));
	// 	else {
	// 		console.log('local storage is not empty: ', localStorage.getItem('savedTodoList'));
	// 		setTodoList(JSON.parse(localStorage.getItem('savedTodoList')));
	// 	}
	// }, []);

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, newTodo ]);
		console.log('todoList: ', todoList);
	};

	// Define a new handler function named removeTodo with parameter id
	const removeTodo = (id) => {
		// console.log('todoList: ', todoList);
		todoList.forEach((element) => {
			if (element.id === id) {
				// console.log('element: ', element, '\nelement.id: ', element.id, '\nid: ', id);
				const newTodoList = todoList.filter((item) => item.id !== id);
				console.log('newTodoList: ', newTodoList);
				setTodoList(newTodoList); // pass the modified array
			}
		});

		console.log('todoList: ', todoList);
	};

	return (
		<React.Fragment>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			{isLoading ? (
				<div>
					<p>Get started by creating your first Todo!</p>
					<p>Loading...</p>
				</div>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</React.Fragment>
	);
}

export default App;
