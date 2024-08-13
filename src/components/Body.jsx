import React from "react";
import ChatHistory from "./chat/ChatHistory";
import ChatInput from "./chat/ChatInput";
import { useState } from "react";

const Body = () => {
  const [infoList, setInfoList] = useState(["A", "B", "C", "D", "E"]);
  const updateList = (item) => {
    setInfoList([...infoList, item]);
    console.log("Inside update list " + infoList);
  };

  return (
    <div className="relative">
      <ChatHistory infoList={infoList} />
      <ChatInput updateList={updateList} />
    </div>
  );
};

export default Body;
