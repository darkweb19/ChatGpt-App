import React from "react";
import { useState } from "react";
import axios from "axios";

function Image() {
	const [data, setData] = useState({
		prompt: "",
	});
	const [prompt, setPrompt] = useState("");
	const [url, setUrl] = useState("");

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	async function handleSubmit(e) {
		e.preventDefault();
		const image = await axios.post("http://localhost:3000/image", data);
		console.log(image.data.data[0].url);
		setPrompt(data.prompt);
		setData({ prompt: "" });
		setUrl(image.data.data[0].url);
	}

	return (
		<div className="container m-6  text-center">
			<h2>Image JPT</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-groupn m-2">
					<p>Prompt was : {prompt}</p>

					<img src={url} alt="......" />
					<br />
					<textarea
						class="form-control m-3"
						id="exampleFormControlTextarea1"
						rows="2"
						type="text"
						name="prompt"
						value={data.prompt}
						onChange={handleChange}
						placeholder="give a prompt"
					></textarea>

					<button className="btn btn-primary">Send</button>
				</div>
			</form>
		</div>
	);
}

export default Image;
