// src/AddTodoForm.js

import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
	const [ todoTitle, setTodoTitle ] = useState('');

	const handleTitleChange = (event) => {
		const newTodoTitle = event.target.value;
		// console.log('newTodoTitle: ', newTodoTitle);
		setTodoTitle(newTodoTitle);
	};

	const handleAddTodo = (event) => {
		event.preventDefault();
		// console.log('todoTitle: ', todoTitle);
		onAddTodo({
			title: todoTitle,
			id: Date.now(),
		});
		setTodoTitle('');
	};

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<InputWithLabel
					htmlFor="todoTitle"
					value={todoTitle}
					onChange={handleTitleChange}
					// label="Title:"
				>
					Title:
				</InputWithLabel>

				{/* moved to Inputwithlabel.js */}
				{/* <label htmlFor="todoTitle">Title: </label> */}

				{/* moved to Inputwithlabel.js */}
				{/* <input value={todoTitle} onChange={handleTitleChange} /> */}

				<button>Add</button>
			</form>
		</div>
	);
}

export default AddTodoForm;
