import React from 'react';
import style from './Search.module.css'

const Search = ({text, setText, placeholder, className}) => {

	return (
		<div className={style.searchContainer}>
			<form>
				<input
					className={className}
					value={text}
					placeholder={placeholder}
					type='search'
					onChange={e => setText(e.target.value)} />
			</form>
		</div>
	);
};

export default Search;