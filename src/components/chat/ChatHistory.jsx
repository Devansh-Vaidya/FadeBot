import { useState, useEffect, useRef } from "react";
import { Avatar, Card } from "@nextui-org/react";
import metaIcon from "../../assets/fadebot.png";
import fetchAvatarImage from "../../utils/APIcalls";
import Markdown from "react-markdown";
import { Code, CodeBlock, vs2015 } from "react-code-blocks";

const MessageCodeBlock = ({ code, language, showLineNumbers }) => {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={vs2015}
    />
  );
};
const MessageInlineCode = ({ code, language }) => {
  return <Code text={code} language={language} theme={vs2015} />;
};

const formatMessage = (message) => {
  let messages = message.split("```");

  return messages.map((line, index) => {
    if (index % 2 === 0) {
      return <Markdown key={index}
      components={{
        code({ className, children, ...props }) {
          return (
            <MessageInlineCode
              code={String(children).replace(/\n$/, "")}
            />
          );
        },
      }}>{line}</Markdown>;
    } else {
      // Extract language name if present
      const firstLineBreak = line.indexOf("\n");
      const language = line.substring(0, firstLineBreak).trim();
      const codeContent = line.substring(firstLineBreak + 1);

      // Render the code block using custom component
      return (
        <Markdown
          key={index}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return (
                <MessageCodeBlock
                  code={String(children).replace(/\n$/, "")}
                  language={match[1] || language}
                  showLineNumbers={false}
                />
              );
            },
          }}
          className='m-4'
        >
          {`\`\`\`${language}\n${codeContent}\n\`\`\``}
        </Markdown>
      );
    }
  });
};

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
            className="max-w-[45%] px-4 py-2 mx-2 bg-neutral-800 bg-opacity-80 text-justify"
          >
            {formatMessage(message["content"])}
          </Card>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
}
