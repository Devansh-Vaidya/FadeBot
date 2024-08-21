import { useState } from "react";
import ChatHistory from "./chat/ChatHistory";
import ChatInput from "./chat/ChatInput";
import GroqBot from "../utils/Bots.js";

export default function Body({ model }) {
  const [infoList, setInfoList] = useState([]);
  const updateList = async (inputPrompt) => {
    let updatedList = [...infoList, { role: "user", content: inputPrompt }];
    setInfoList(updatedList);
    console.log(model, updatedList);
    let response = await GroqBot(model, updatedList);

    updatedList = [...updatedList, { role: "system", content: response }];
    setInfoList(updatedList);
  };

  return (
    <div className="flex flex-col">
      <div className="relative z-10 flex-1 overflow-auto">
        <ChatHistory infoList={infoList} />
      </div>
      <ChatInput updateList={updateList} />
    </div>
  );
}
