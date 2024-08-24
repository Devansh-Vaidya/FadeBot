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

  // Scroll to the latest message when infoList changes
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  // let botMessages = chatList.filter((message) => message["role"] === "system");
  // let userMessages = chatList.filter((message) => message["role"] === "user");

  // const [botFormattedMessages, setBotFormattedMessages] = useState(<div></div>);
  // const [userFormattedMessages, setUserFormattedMessages] = useState(
  //   <div></div>
  // );

  // const formatMessages = (messages) => {
  //   const lines = messages.map((message) => message["content"].split("\n"));
  //   return messages.map((message, index) => (
  //     <div>
  //       {lines[index].map((line) => (
  //         <Card
  //           shadow
  //           className="max-w-[45%] p-1.5 bg-cyan-900 bg-opacity-80 text-white px-3 py-2 mx-1 text-justify"
  //         >
  //           {line.map((line, index) => {
  //             if (line.startsWith("```") && line.endsWith("```")) {
  //               return (
  //                 <pre className="text-white" key={index}>
  //                   {line.slice(3, -3)}
  //                 </pre>
  //               );
  //             } else if (line.includes("`")) {
  //               const parts = line.split(/`(.*?)`/);
  //               return (
  //                 <p key={index}>
  //                   {parts.map((part, i) => {
  //                     i % 2 == 1 ? <code key={i}>{part}</code> : part;
  //                   })}
  //                 </p>
  //               );
  //             } else {
  //               return <p key={index}>{line}</p>;
  //             }
  //           })}
  //         </Card>
  //       ))}
  //     </div>
  //   ));
  // };

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
