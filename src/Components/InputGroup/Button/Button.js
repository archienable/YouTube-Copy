import React from 'react';

const Button = ({className, disabled, onClick, children}) => {
	return (
		<button className={className}
						disabled={disabled}
						onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;