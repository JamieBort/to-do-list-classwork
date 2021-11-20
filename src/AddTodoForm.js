// src/AddTodoForm.js

import React, { useState } from 'react';

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
				<label htmlFor="todoTitle">Title: </label>
				{/* <input id="todoTitle" name="title"></input> */}
				<input value={todoTitle} onChange={handleTitleChange} />
				<button>Add</button>
			</form>
		</div>
	);
}

export default AddTodoForm;
