import { useState, useEffect, useRef } from "react";
import { Avatar, Card } from "@nextui-org/react";
import metaIcon from "../../assets/fadebot.png";
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

  // Scroll to the latest message when infoList changes
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  return (
    <div className="h-[80vh] overflow-y-auto p-4" id="chat">
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
              color="default"
              src={metaIcon}
              className="mx-2"
            />
          ) : (
            <Avatar
              isBordered
              color="default"
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
