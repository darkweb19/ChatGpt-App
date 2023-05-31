import React from "react";
import { useState } from "react";
import axios from "axios";

function Chat() {
	const [data, setData] = useState({
		prompt: "",
	});
	const [chat, setChat] = useState("");

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const submitChat = async (e) => {
		e.preventDefault();
		const result = await axios.post("http://localhost:3000/chat", data);
		console.log(result.data);
		setData({ prompt: "" });
		setChat(result.data);
	};
	// console.log(result);
	return (
		<div className="container m-6 p-7 text-center">
			<h2>ChatGpt - Ask Anything</h2>
			{/* <form className="form-control" onSubmit={submitChat}>
				<input
					className="form-control w-75 h-50 m-4"
					type="text"
					name="prompt"
					value={data.prompt}
					onChange={handleChange}
					placeholder="give a prompt"
				/>
				<h5>GPT: {chat}</h5>
				<br />
				<button className="btn btn-primary">Send</button>
			</form> */}

			<form onSubmit={submitChat}>
				<div class="form-group">
					<br />
					<h5 className="m-4">GPT: {chat}</h5>
					<br />
					<br />

					<textarea
						class="form-control m-3"
						id="exampleFormControlTextarea1"
						rows="3"
						type="text"
						name="prompt"
						value={data.prompt}
						onChange={handleChange}
						placeholder="give a prompt"
					></textarea>
					<br />
					<button className="btn btn-primary">Send</button>
				</div>
			</form>
		</div>
	);
}

export default Chat;
