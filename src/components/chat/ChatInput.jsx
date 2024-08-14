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
      <div className="fixed bottom-2 w-4/5 flex items-end">
        <div className="flex-1 flex-col">
          <Textarea
            label="Input"
            placeholder="Enter your description"
            className="resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            minRows={1}
            maxRows={5}
          />
        </div>
        <Button
          isIconOnly
          className="dark:bg-white dark:text-black"
          onClick={submitButtonClicked}
          auto
        >
          <Icon icon="lets-icons:send-hor" width="36" height="36" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
