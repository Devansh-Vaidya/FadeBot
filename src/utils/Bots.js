import Groq from "groq-sdk";
import configData from "../../config.json";

const GroqBot = async (promptMessages) => {
  const apiKey = configData["GROQ_API_KEY"];

  const groq = new Groq({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  let reponse = await groq.chat.completions.create({
    messages: promptMessages,
    model: "llama-3.1-70b-versatile",
  });

  let errorMessage = "The bot is not responding. Please try again later.";

  return reponse["choices"][0]["message"]["content"] || errorMessage;
};

export default GroqBot;
