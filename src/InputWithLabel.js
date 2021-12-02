// src/InputWithLabel.js

import React from 'react';

const InputWithLabel = (props) => {
	return (
		<React.Fragment>
			<label htmlFor={props.htmlFor}>Title: </label>

			<input value={props.value} onChange={props.onChange} />
		</React.Fragment>
	);
};

export default InputWithLabel;
