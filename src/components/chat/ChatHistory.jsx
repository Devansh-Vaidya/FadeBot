import { Card, Avatar } from "@nextui-org/react";
import metaIcon from "../../assets/logos--meta-icon.svg";

const ChatHistory = ({ infoList }) => {
  return (
    <div className="flex flex-col p-4 overflow-y-auto h-full">
      {infoList.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          } items-center my-2`}
        >
          {index % 2 === 0 ? (
            <Avatar
              src="https://images.unsplash.com/photo-1469297677538-c7312a64dbe8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="mr-2"
            />
          ) : (
            <Avatar src={metaIcon} className="mr-2" />
          )}
          <Card className="max-w-prose p-1.5 bg-gray-800 text-white">
            {message}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
