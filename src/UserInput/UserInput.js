import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
	return (
		<div className="UserInput">
			<label className="title" for="username">Enter Username</label>
			<input type="text" name="username" onChange={props.changed} value={props.currentUsername} />
		</div>
	);
}

export default UserInput;