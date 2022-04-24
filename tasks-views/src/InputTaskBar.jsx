import React, { useState, useEffect } from 'react';
// axios is not working
// import axios from 'axios';

export default function InputTaskBar() {
	const [task, setTask] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [description, setDescription] = useState('');
	// const [data, setData] = useState('');

	// receiving info back from db
	// useEffect(() => {
	// 	// from db
	// 	axios.get().then((response) => setData(response.data));
	// }, [task]);
	function postTask() {
		console.log(task);
		//use fetch vs axios since axios is not importing
		fetch(`http://localhost:4000/${task}`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ task, expirationDate, description }),
		});
	}

	return (
		<div>
			<form onSubmit={postTask}>
				<div>Jot down a task</div>
				<input type='search' onChange={(e) => setTask(e.target.value)}></input>
			</form>

			{/* need a drop down for the date */}
			<div>Due date</div>
			<input type='month' onChange={(e) => setExpirationDate(e.target.value)} />
			{expirationDate}

			<div>
				Remind yourself why you want to do this
				<br />
				<input onChange={(e) => setDescription(e.target.value)}></input>
				{description}
			</div>
			{/* need like a card */}
			{/* add event listener to button so when clicked, update db */}
			<button>filter</button>
		</div>
	);
}
