import { useState } from "react";
import ChatHistory from "./chat/ChatHistory";
import ChatInput from "./chat/ChatInput";
import GroqBot from "../utils/Bots.js";
import bgWallpaper from "../assets/bg-wallpaper.jpg";

const Body = ({ model }) => {
  const [infoList, setInfoList] = useState([]);
  const updateList = async (inputPrompt) => {
    let updatedList = [...infoList, { role: "user", content: inputPrompt }];
    setInfoList(updatedList);
    let response = await GroqBot(model, updatedList);

    updatedList = [...updatedList, { role: "system", content: response }];
    setInfoList(updatedList);
  };

  return (
    <div className="relative flex flex-col min-h-[90vh]">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${bgWallpaper})` }}
      ></div>
      <div className="relative z-10 flex-1 overflow-auto">
        <ChatHistory infoList={infoList} />
      </div>
      <ChatInput updateList={updateList} />
    </div>
  );
};

export default Body;
