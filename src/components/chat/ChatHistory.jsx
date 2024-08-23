import { useState, useEffect, useRef } from "react";
import { Card, Avatar } from "@nextui-org/react";
import metaIcon from "../../assets/logos--meta-icon.svg";
import fetchAvatarImage from "../../utils/APIcalls";

export default function ChatHistory({ chatList }) {
  const [avatarURL, setAvatarURL] = useState("");
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    const getAvatar = async () => {
      const url = await fetchAvatarImage();
      setAvatarURL(url);
    };

    getAvatar();
  }, []);

  return (
    <div className="flex flex-col p-4 overflow-y-auto h-[80vh]">
      {chatList.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          } items-center my-2`}
        >
          {message["role"] === "system" ? (
            <Avatar
              isBordered
              color="#000000"
              src={metaIcon}
              className="mx-2"
            />
          ) : (
            <Avatar
              isBordered
              color="warning"
              src={avatarURL}
              className="mx-2"
            />
          )}
          <Card
            shadow
            className="max-w-[45%] p-1.5 bg-cyan-900 bg-opacity-80 text-white px-3 py-2 mx-1 text-justify"
          >
            {message["content"]}
          </Card>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
}
