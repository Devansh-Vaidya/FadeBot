import { Textarea, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function ChatInput({ updateList }) {
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
    <div className="w-[60vh] flex flex-1 justify-center items-center">
      <Textarea
        placeholder="Write your message here!"
        className="resize-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        minRows={1}
        maxRows={5}
      />
      <Button
        isIconOnly
        className="bg-transparent left-1"
        onClick={submitButtonClicked}
        isDisabled={input.trim() === "" || loading ? true : false}
      >
        <Icon icon="lets-icons:send-hor" width="32" height="32" />
      </Button>
    </div>
  );
}
