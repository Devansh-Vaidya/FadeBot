import { Card } from "@nextui-org/react";

const ChatHistory = (props) => {
  return (
    <div className="flex flex-col p-4 overflow-y-auto h-full">
      {props.infoList.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          } my-2`}
        >
          <Card className="max-w-7/10 p-1.5">{message}</Card>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
