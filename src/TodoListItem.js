// src/TodoListItem.js

import React from 'react';

function TodoListItem({ list }) {
	return (
		<div>
			<ul>{list.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
		</div>
	);
}

export default TodoListItem;
