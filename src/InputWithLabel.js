// src/InputWithLabel.js

import React from 'react';

const InputWithLabel = ({ htmlFor, label, value, onChange, children }) => {
	return (
		<React.Fragment>
			<label htmlFor={htmlFor}>
				{/* {label} */}
				{children}
			</label>

			<input value={value} onChange={onChange} />
		</React.Fragment>
	);
};

export default InputWithLabel;
