const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//configure openai
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
	apiKey: process.env.OPEANAI_KEY,
});

const openai = new OpenAIApi(configuration);

//this is for chat
app.post("/chat", async (req, res) => {
	try {
		const prompt = req.body.prompt;
		const completion = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: `${prompt}` }],
			temperature: 0.7,
			max_tokens: 200,
		});

		console.log(completion.data.choices[0].message.content);
		// res.json({
		// 	success: true,
		// 	message: completion.data.choices[0].text,
		// });
		res.json(completion.data.choices[0].message.content);
	} catch (error) {
		console.log(error.message);
	}
});

//for image gpt
app.post("/image", async (req, res) => {
	try {
		const imagePrompt = req.body.prompt;
		const response = await openai.createImage({
			prompt: `${imagePrompt}`,
			n: 1,
			size: "512x512",
		});
		console.log(response.data);
		res.json(response.data);
	} catch (err) {
		console.log(err.message);
	}
});

app.listen(3000, () => {
	console.log("Server started");
});
