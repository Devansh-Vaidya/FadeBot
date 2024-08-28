import { useState } from "react";
import ChatHistory from "./chat/ChatHistory";
import ChatBar from "./chat/ChatBar";
import GroqBot from "../utils/Bots.js";

export default function Body({ model }) {
  const [chatList, setChatList] = useState([]);

  const updateList = async (inputPrompt) => {
    let updatedList = [...chatList, { role: "user", content: inputPrompt }];
    setChatList(updatedList);
    let response = await GroqBot(model, updatedList);
    updatedList = [...updatedList, { role: "system", content: response }];
    setChatList(updatedList);
  };

  const clearList = () => {
    setChatList([]);
  };

  const importChatHistory = (chatHistory) => {
    setChatList(chatHistory);
  };

  return (
    <div className="flex flex-col relative z-10">
      <ChatHistory chatList={chatList} />
      <ChatBar
        updateList={updateList}
        clearList={clearList}
        chatList={chatList}
        importChatHistory={importChatHistory}
      />
    </div>
  );
}
