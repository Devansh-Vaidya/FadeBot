import { Card } from "@nextui-org/react";

const ChatHistory = ({ infoList }) => {
  return (
    <div className="flex flex-col p-4 overflow-y-auto h-full">
      {infoList.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          } my-1`}
        >
          <Card className="max-w-7/10 p-1.5 bg-gray-800 text-white">
            {message}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
