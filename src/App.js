// src/App.js

import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
// import TodoList from './TodoList';
import NewTodoList from './NewTodoList';
import AddAirtableForm from './AddAirtableForm';
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
	process.env.REACT_APP_AIRTABLE_BASE_ID,
);
// console.log(process.env.REACT_APP_AIRTABLE_API_KEY);
// console.log(process.env.REACT_APP_AIRTABLE_BASE_ID);

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

const INIT_OBJECT = { headers: { Authorization: 'Bearer ' + process.env.REACT_APP_AIRTABLE_API_KEY } };
const API_ENDPOINT = 'https://api.airtable.com/v0/' + process.env.REACT_APP_AIRTABLE_BASE_ID + '/Default';
// // https://api.airtable.com/v0/{BASE_ID}/Default
// console.log(process.env.REACT_APP_AIRTABLE_API_KEY);
// console.log(process.env.REACT_APP_AIRTABLE_BASE_ID);

// const listsReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'SET_LISTS':
// 			return action.payload;
// 		case 'SET_STORIES':
// 			return action.payload;
// 		case 'REMOVE_STORY':
// 			return state.filter((story) => action.payload.objectID !== story.objectID);
// 		default:
// 			throw new Error();
// 	}
// };

const listsReducer = (state, action) => {
	if (action.type === 'SET_LISTS') {
		return action.payload;
		// } else {
		// 	throw new Error();
	}
};

function App() {
	// const [ todoList, setTodoList ] = useSemiPersistentState();

	// const [ todoList, setTodoList ] = useState([]);
	const [ todoList, dispatchLists ] = React.useReducer(listsReducer, []);
	// console.log('todoList: ', todoList);

	// I didn't need this isLoading useState. However I added it just in case. Instructions from https://github.com/Code-the-Dream-School/ctd-react-canary/wiki/Lesson-1.7#add-loading-state
	const [ isLoading, setIsLoading ] = useState(true);

	// // useEffect to create a side effect for obtaining the data from an "api". This "Api" is replicated by using a setTimeout() method.
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
	// 		// setTodoList(result.data.todoList);
	// 		dispatchLists({
	// 			type: 'SET_LISTS',
	// 			payload: result.data.todoList,
	// 		});

	// 		setIsLoading(false);
	// 	});
	// }, []);

	// useEffect to create a side effect for obtaining the data from an (actual) api.
	useEffect(() => {
		fetch(API_ENDPOINT, INIT_OBJECT)
			.then((response) => {
				const output = response.json();
				console.log(output);
				// console.log(response.json());
				return output;
			})
			.then((result) => {
				// console.log(result);
				console.log('result.records: ', result.records);
				// setTodoList(result.records);

				dispatchLists({
					type: 'SET_LISTS',
					payload: result.records,
				});
				setIsLoading(false);
			});
	}, []);

	// This saves the list in local storage (in the browser).
	useEffect(
		() => {
			// console.log('todoList: ', todoList);
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
		// setTodoList([ ...todoList, newTodo ]);
		dispatchLists({
			type: 'SET_LISTS',
			// payload: [ ...todoList, newTodo ],
			// payload: [ ...lists, newTodo ],
			payload: newTodo,
		});
		console.log('todoList: ', todoList);
	};

	const addToAirtable = (newAirtableItem) => {
		console.log('newAirtableItem.title: ', newAirtableItem.title);
		// console.log(process.env.REACT_APP_AIRTABLE_API_KEY);
		// console.log(process.env.REACT_APP_AIRTABLE_BASE_ID);

		base('Default').create(
			[
				{
					fields: {
						Title: newAirtableItem.title,
					},
				},
				// {
				// 	fields: {
				// 		Title: 'Run errands',
				// 	},
				// },
			],
			function(err, records) {
				if (err) {
					console.error(err);
					return;
				}
				records.forEach(function(record) {
					console.log(record.getId());
				});
			},
		);
	};

	// Define a new handler function named removeTodo with parameter id
	const removeTodo = (id) => {
		// console.log('todoList: ', todoList);
		todoList.forEach((element) => {
			if (element.id === id) {
				// console.log('element: ', element, '\nelement.id: ', element.id, '\nid: ', id);
				const newTodoList = todoList.filter((item) => item.id !== id);
				console.log('newTodoList: ', newTodoList);
				// setTodoList(newTodoList); // pass the modified array
				dispatchLists({
					type: 'SET_LISTS',
					payload: newTodoList,
				});
			}
		});

		console.log('todoList: ', todoList);
	};

	return (
		<React.Fragment>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<AddAirtableForm onAddTodo={addToAirtable} />
			{isLoading ? (
				<div>
					<p>Get started by creating your first Todo!</p>
					<p>Loading...</p>
				</div>
			) : (
				<div>
					{/* <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> */}
					<NewTodoList newTodoList={todoList} onRemoveTodo={removeTodo} />
				</div>
			)}
		</React.Fragment>
	);
}

export default App;
