import React from "react";

function AddPost({ key, index, post }) {
	return (
		<div>
			<div className="post">
				<img src="/Images/dummy.jpg" alt="user" />
				<div className="post-content">
					<div className="time">12:12 pm</div>
					<div className="name">Teacher</div>
					<br />
					<p>{post.msg}</p>
				</div>
			</div>
		</div>
	);
}

export default AddPost;
