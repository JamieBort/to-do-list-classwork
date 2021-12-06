// src/TodoListItem.js

import React from 'react';

function TodoListItem({ list, removeTodo }) {
	return (
		<div>
			<ul>
				{list.map((item) => (
					<li key={item.id}>
						{item.title}
						{': '}
						{/* <button type="button" onClick={() => onRemoveItem(item)}>*/}
						{/* <button type="button" onClick={removeTodo(item.id)}> */}
						<button type="button" onClick={() => removeTodo(item.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoListItem;
