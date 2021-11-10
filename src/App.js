import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
	// const [newTodo, setNewTodo] = useState();
	const [ todoList, setTodoList ] = useState([]);

	const addTodo = (newTodo) => {
		// Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
		setTodoList([ ...todoList, newTodo ]);
	};

	return (
		<div>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} />
		</div>
	);
}

export default App;
