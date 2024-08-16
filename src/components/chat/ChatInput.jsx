import { Textarea, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

const ChatInput = ({ updateList }) => {
  // Input field for chat messages
  const [input, setInput] = useState("");

  // Loading state for the submit button
  const [loading, setLoading] = useState(false);

  const submitButtonClicked = async () => {
    if (input.trim()) {
      setLoading(true); // Disable the button
      let chat = input.trim();
      setInput("");
      try {
        await updateList(chat);
      } finally {
        setLoading(false); // Re-enable the button
      }
    }
  };

  const handleKeyPress = (e) => {
    if (!loading && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitButtonClicked();
    }
  };

  return (
    <div className="flex justify-center h-[10vh] py-8 border-t-2 border-zinc-800">
      <div className="w-4/5 flex items-end">
        <div className="flex-1 flex-col">
          <Textarea
            placeholder="Write your message here!"
            className="resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            minRows={1}
            maxRows={5}
          />
        </div>
        <Button
          isIconOnly
          className="bg-transparent left-1"
          onClick={submitButtonClicked}
          isDisabled={input.trim() === "" || loading ? true : false}
        >
          <Icon icon="lets-icons:send-hor" width="32" height="32" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
