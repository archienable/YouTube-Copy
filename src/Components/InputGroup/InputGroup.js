import React, {useState} from 'react';
import style from './InputGroup.module.css'
import Input from "./Input/Input";
import Button from "./Button/Button";
import {NavLink} from "react-router-dom";

const InputGroup = () => {

	const [text, setText] = useState('')

	return (
		<div className={style.inputGroupContainer}>
			<Input className={style.addInput} text={text} setText={setText} placeholder='Search'/>
			<NavLink to={`/results?search_query=${text}`}>
				<Button className={style.addBtn} disabled={!text} onClick={() => setText('')}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="search">
							<g id="Group">
								<path id="Vector" d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
											fill="white"/>
							</g>
						</g>
					</svg>
				</Button>
			</NavLink>
			<Button className={style.btnMic}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z" fill="white"/>
				</svg>
			</Button>
		</div>
	);
};

export default InputGroup;