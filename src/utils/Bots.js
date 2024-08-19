import Groq from "groq-sdk";
import configData from "../../config.json";

// Global dictionary for bot models
const botModels = {
  "Llama 3": "llama-3.1-70b-versatile",
  "Gemma 2": "gemma2-9b-it",
};

export default async function GroqBot(botName, promptMessages) {
  const apiKey = configData["GROQ_API_KEY"];
  const groq = new Groq({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  console.log("Bot Model: ", botModels[botName]);

  let reponse = await groq.chat.completions.create({
    messages: promptMessages,
    model: botModels[botName],
  });

  let errorMessage = "The bot is not responding. Please try again later.";

  return reponse["choices"][0]["message"]["content"] || errorMessage;
}
