import configData from "../../config.json";

// Global dictionary for bot models
const botModels = {
  "Llama 3": "llama-3.1-70b-versatile",
  "Gemma 2": "gemma2-9b-it",
};

export default async function GroqBot(botName, promptMessages) {
  const requestBody = {
    messages: promptMessages,
    model: botModels[botName],
  };

  console.log("Request Body: ", requestBody);

  console.log("Bot Model: ", botModels[botName]);

  // Get the model response from API
  let response = await fetch(configData["GROQ_API"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  console.log("Response: ", response);

  let errorMessage = "The bot is not responding. Please try again later.";

  return response["message"] || errorMessage;
}
