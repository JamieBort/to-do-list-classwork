import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = useState();

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      {/* <AddTodoForm /> */}

      <AddTodoForm onAddTodo={setNewTodo} />

      <p>{newTodo}</p>
    </div>
  );
}

export default App;