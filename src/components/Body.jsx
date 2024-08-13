import ChatHistory from "./chat/ChatHistory";
import ChatInput from "./chat/ChatInput";
import { useState } from "react";

const Body = () => {
  const [infoList, setInfoList] = useState(["A", "B", "C", "D"]);
  const updateList = (item) => {
    setInfoList([...infoList, item, "Input Received"]);
    console.log("Inside update list " + infoList);
  };

  return (
    <div>
      <ChatHistory infoList={infoList} />
      <ChatInput updateList={updateList} />
    </div>
  );
};

export default Body;
