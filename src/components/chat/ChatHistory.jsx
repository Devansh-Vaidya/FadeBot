import { Card, Avatar } from "@nextui-org/react";
import metaIcon from "../../assets/logos--meta-icon.svg";
import fetchAvatarImage from "../../utils/APIcalls";
import { useState, useEffect, useRef } from "react";

const ChatHistory = ({ infoList }) => {
  const [avatarURL, setAvatarURL] = useState("");
  useEffect(() => {
    const getAvatar = async () => {
      const url = await fetchAvatarImage();
      setAvatarURL(url);
    };

    getAvatar();
  }, []);

  return (
    <div className="flex flex-col p-4 overflow-y-auto h-full">
      {infoList.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          } items-center my-2`}
        >
          {message["role"] === "system" ? (
            <Avatar src={metaIcon} className="mx-2" />
          ) : (
            <Avatar src={avatarURL} className="mx-2" />
          )}
          <Card className="max-w-prose p-1.5 bg-gray-800 text-white px-3 py-2 text-justify">
            {message["content"]}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
