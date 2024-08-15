import { Textarea, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

const ChatInput = (props) => {
  const [input, setInput] = useState("");

  const submitButtonClicked = () => {
    if (input.trim()) {
      props.updateList(input.trim());
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitButtonClicked();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="fixed bottom-5 w-4/5 flex items-end">
        <div className="flex-1 flex-col">
          <Textarea
            // variant="bordered"
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
          isDisabled={input.trim() === "" ? true : false}
          isIconOnly
          className="bg-transparent left-1"
          onClick={submitButtonClicked}
        >
          <Icon icon="lets-icons:send-hor" width="32" height="32" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
