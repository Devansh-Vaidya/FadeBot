import Groq from "groq-sdk";
import configData from "../../config.json";

const GroqBot = async (botName, promptMessages) => {
  const apiKey = configData["GROQ_API_KEY"];
  const groq = new Groq({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  let model = "";

  switch (botName) {
    case "Llama 3":
      model = "llama-3.1-70b-versatile";
    case "Gemma 2":
      model = "gemma2-9b-it";
    default:
      model = "llama-3.1-70b-versatile";
  }

  let reponse = await groq.chat.completions.create({
    messages: promptMessages,
    model: model,
  });

  let errorMessage = "The bot is not responding. Please try again later.";

  return reponse["choices"][0]["message"]["content"] || errorMessage;
};

export default GroqBot;
