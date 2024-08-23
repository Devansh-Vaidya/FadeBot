import { useState } from "react";
import ChatHistory from "./chat/ChatHistory";
import ChatBar from "./chat/ChatBar";
import GroqBot from "../utils/Bots.js";

export default function Body({ model }) {
  const [chatList, setChatList] = useState([]);
  const updateList = async (inputPrompt) => {
    let updatedList = [...chatList, { role: "user", content: inputPrompt }];
    setChatList(updatedList);
    console.log(model, updatedList);
    let response = await GroqBot(model, updatedList);

    updatedList = [...updatedList, { role: "system", content: response }];
    setChatList(updatedList);
  };

  const clearList = () => {
    setChatList([]);
  };

  return (
    <div className="flex flex-col">
      <div className="relative z-10 flex-1 overflow-auto">
        <ChatHistory chatList={chatList} />
      </div>
      <ChatBar updateList={updateList} clearList={clearList} />
    </div>
  );
}
