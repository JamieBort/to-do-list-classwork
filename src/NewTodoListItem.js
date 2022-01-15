// src/TodoListItem.js

import React from 'react';

function TodoListItem({ newList, removeTodo }) {
	console.log('newList: ', newList);
	// return <p>temp</p>;
	return (
		<div>
			<ul>
				{newList.map((item) => (
					<li key={item.id}>
						{item.fields.Title}
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
