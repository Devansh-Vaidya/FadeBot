import React from "react";
import { Textarea, Button } from "@nextui-org/react";
import { useState } from "react";

const ChatInput = (props) => {
  const [input, setInput] = useState("");

  const submitButtonClicked = () => {
    props.updateList(input);
    setInput("");

    console.log("Input " + input);
  };

  return (
    <div className="fixed inset-x-0 bottom-2 flex justify-center">
      <div className="relative w-4/5">
        <Textarea
          key="bordered"
          label="Input"
          placeholder="Enter your description"
          className="resize-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button isIconOnly className="" onClick={submitButtonClicked} auto>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
