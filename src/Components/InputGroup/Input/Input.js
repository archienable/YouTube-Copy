import React from 'react';

const Input = ({className, placeholder, text, setText}) => {
	return (
		<input className={className}
					 placeholder={placeholder}
					 value={text}
					 onChange={e => setText(e.target.value)}
					 type='search'
		/>
	);
};

export default Input;