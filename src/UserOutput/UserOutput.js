import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p className="title">Username Entered</p>
			<p>{props.username}</p>
		</div>
	);
}

export default UserOutput;