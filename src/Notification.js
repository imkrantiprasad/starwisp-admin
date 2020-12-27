import React from "react";

function Notification() {
	return (
		<div>
			<div className="board-item">
				<p className="item-name">Admin</p>
				<span className="item-msg">Your faculty uploaded the syllabus.</span>
				<p className="item-time">3 minutes ago</p>
			</div>
		</div>
	);
}

export default Notification;
