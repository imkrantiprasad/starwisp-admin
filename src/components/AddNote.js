import React from "react";

function AddNote({ key, index, note }) {
	return (
		<div>
			<div className="note">
				<p>
					Title <span className="note-text">{note.note}</span>
				</p>
			</div>
		</div>
	);
}

export default AddNote;
