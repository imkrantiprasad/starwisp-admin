import React, { useState } from "react";
import AddNote from "./AddNote";

function Admin() {
	const [notes, setPost] = useState([
		{
			note: "Starwisp Assignment",
		},
		{
			note: "Learn graph data structure",
		},
	]);
	const [value, setValue] = useState("");
	const [error, setError] = useState("");

	const addNote = (note) => {
		const newNotes = [...notes, { note }];
		setPost(newNotes);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) {
			setError("Please enter a Todo");
			return;
		}
		addNote(value);
		setValue("");
	};

	const handleChange = (e) => {
		if (error) setError("");
		setValue(e.target.value);
	};

	return (
		<>
			<div className="container">
				<div className="search">
					<input placeholder="Search" />
				</div>
				<br />

				<div className="stat-box">
					<div className="left-stat">
						<div className="report-text">
							Sales Report <span className="gray-text">September 2020</span>
						</div>
						<img src="/Images/graph.png" alt="graph" />
					</div>
					<div className="right-stat">
						<div className="right-stat-head">17 Sep</div>
						<div className="box-1">
							<br />
							<div className="box-value">$1,204.33</div>
							<br />
							<div className="box-text">Revenue</div>
						</div>
						<div className="box-2">
							<br />
							<div className="box-value">$1,204.33</div>
							<br />
							<div className="box-text">Revenue</div>
						</div>
					</div>
				</div>

				<div className="notes">
					<div className="note-head">Notepad</div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={value}
							onChange={handleChange}
							placeholder="Add note.."
						/>
						<button> + </button>
					</form>
					<div className="">
						{notes.map((note, index) => (
							<AddNote key={index} index={index} note={note} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Admin;
