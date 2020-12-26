import React, { useState } from "react";
import AddPost from "./AddPost";

function Posts() {
	const [posts, setPost] = useState([
		{
			msg:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliquaUtenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
		},
		{
			msg:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliquip ex ea commodo consequat",
		},
	]);
	const [value, setValue] = useState("");
	const [error, setError] = useState("");

	const addPost = (msg) => {
		const newPosts = [...posts, { msg }];
		setPost(newPosts);
		posts.reverse();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) {
			setError("Please enter a Todo");
			return;
		}
		addPost(value);
		setValue("");
	};

	const handleChange = (e) => {
		if (error) setError("");
		setValue(e.target.value);
	};

	return (
		<>
			<div className="container">
				<div className="post-card">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={value}
							onChange={handleChange}
							placeholder="Share something with your class..."
						/>
						<div className="cancel">
							<a href="##">Cancel</a>
						</div>
						<div className="send">
							<button type="submit">Share</button>
						</div>
					</form>
				</div>
				<div className="posts">
					{posts.map((post, index) => (
						<AddPost key={index} index={index} post={post} />
					))}
				</div>
			</div>
		</>
	);
}

export default Posts;
