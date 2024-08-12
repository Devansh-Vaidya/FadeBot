import React from "react";
import { Textarea, Button } from "@nextui-org/react";
import { useState } from "react";

const ChatInput = (props) => {
  const [input, setInput] = useState("");
  const [rows, setRows] = useState(1);

  const handleTextChange = (e) => {
    const textareaLineHeight = 16; // This depends on your font size and line height in the Textarea
    const previousRows = e.target.rows;
    e.target.rows = 1; // Reset to one row to recalculate the correct height

    const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= 5) {
      e.target.rows = 5;
      e.target.scrollTop = e.target.scrollHeight;
    }

    setInput(e.target.value);
    setRows(currentRows < 5 ? currentRows : 5);
  };

  const submitButtonClicked = (data) => {
    props.updateList(input);

    setInput("");
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
          onChange={handleTextChange}
          rows={rows}
        />
        <Button isIconOnly className="" onClick={submitButtonClicked} auto>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
