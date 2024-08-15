import LlamaAI from "llamaai";
import configData from "../../config.json";

const LlamaBot = async (promptMessages) => {
  try {
    const apiKey = configData["llama-api-key"];
    const llamaAPI = new LlamaAI(apiKey);
    const apiRequestJson = {
      model: "llama-70b-chat",
      messages: promptMessages,
    };
    console.log(promptMessages)

    const response = await llamaAPI.run(apiRequestJson);
    
    console.log("working", response['choices'][0]['message']['content']);
    return response['choices'][0]['message']['content'];
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default LlamaBot;
