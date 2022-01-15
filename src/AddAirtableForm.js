// src/AddTodoForm.js
// Used to add items to Airtable.

import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddAirtableForm({ onAddTodo }) {
	const [ todoTitle, setTodoTitle ] = useState('');

	const handleTitleChange = (event) => {
		const newTodoTitle = event.target.value;
		// console.log('newTodoTitle: ', newTodoTitle);
		setTodoTitle(newTodoTitle);
	};

	const handleAddTodo = (event) => {
		// console.log('event: ', event.value);
		event.preventDefault();
		console.log('todoTitle: ', todoTitle);
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
					isFocused
				>
					Title:
				</InputWithLabel>

				{/* moved to Inputwithlabel.js */}
				{/* <label htmlFor="todoTitle">Title: </label> */}

				{/* moved to Inputwithlabel.js */}
				{/* <input value={todoTitle} onChange={handleTitleChange} /> */}

				<button>Add to Airtable</button>
			</form>
		</div>
	);
}

export default AddAirtableForm;
