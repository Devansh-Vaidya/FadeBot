import configData from "../../config.json";

// Global dictionary for bot models with their corresponding API names
const botModels = {
  "Llama 3": "llama-3.1-70b-versatile",
  "Gemma 2": "gemma2-9b-it",
};

// Asynchronous function to interact with the Groq API based on bot name and prompt messages
export default async function GroqBot(botName, promptMessages) {
  // Create the request body for the API call with messages and model based on botName
  const requestBody = {
    messages: promptMessages,
    model: botModels[botName],
  };

  // Log the request body for debugging purposes
  console.log("Request Body: ", requestBody);

  // Log the bot model being used for debugging purposes
  console.log("Bot Model: ", botModels[botName]);

  try {
    // Make the POST request to the Groq API
    let response = await fetch(configData["GROQ_API"], {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), // Send the request body as JSON
    });

    // Parse the JSON response from the API
    let jsonResponse = await response.json();

    // Log the entire response object for debugging
    console.log("Response: ", response);

    // Return the message from the JSON response, or a default error message if not available
    let errorMessage = "The bot is not responding. Please try again later.";
    return jsonResponse["message"] || errorMessage;
  } catch (error) {
    // Catch and log any errors that occur during the fetch or JSON parsing
    console.error("Error occurred:", error);
    return "An error occurred. Please try again later.";
  }
}
