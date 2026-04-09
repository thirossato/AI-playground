import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
	apiKey: process.env.OPEN_API_KEY,
})

async function main() {
	const response = await openai.chat.completions.create({
		model: "gpt-4.1-mini",
		messages: [
			{ role: "system", content: "Responda APENAS em JSON válido." },
			{ role: "user", content: "Gere uma lista de 10 ideias rentáveis na impressão 3d" }
		],
		temperature: 0.1,
	});
	console.log(response.choices[0].message.content);
}

main();
