import ChatHistory from "./chat/ChatHistory";
import ChatInput from "./chat/ChatInput";
import GroqBot from "../utils/Bots";
import { useState } from "react";

const Body = () => {
  const [infoList, setInfoList] = useState([]);
  const updateList = async (inputPrompt) => {
    let updatedList = [...infoList, { role: "user", content: inputPrompt }];
    setInfoList(updatedList);
    const response = await GroqBot(updatedList);
    updatedList = [...updatedList, { role: "system", content: response }];
    setInfoList(updatedList);
  };

  return (
    <div>
      <ChatHistory infoList={infoList} />
      <ChatInput updateList={updateList} />
    </div>
  );
};

export default Body;
