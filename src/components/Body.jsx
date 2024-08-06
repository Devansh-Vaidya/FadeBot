import React from "react";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import { useState } from "react";

const Body = () => {
  const [infoList, setInfoList] = useState(["A", "B", "C", "D", "E"]);
  const updateList = (item) => {
    setInfoList([...infoList, item]);
  };

  return (
    <div>
      <ChatHistory infoList={infoList} />
      <ChatInput updateList={updateList} />
    </div>
  );
};

export default Body;
