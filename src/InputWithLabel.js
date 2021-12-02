// src/InputWithLabel.js

import React from 'react';

const InputWithLabel = ({ htmlFor, label, value, onChange, children, isFocused }) => {
	const inputRef = React.useRef();

	React.useEffect(
		() => {
			if (isFocused && inputRef.current) {
				inputRef.current.focus();
			}
		},
		[ isFocused ],
	);

	return (
		<React.Fragment>
			<label htmlFor={htmlFor}>
				{/* {label} */}
				{children}
			</label>

			<input value={value} onChange={onChange} autoFocus={isFocused} ref={inputRef} />
		</React.Fragment>
	);
};

export default InputWithLabel;
