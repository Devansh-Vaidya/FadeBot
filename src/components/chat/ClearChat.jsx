import React from "react";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const ClearChat = () => {
  return (
    <div className="flex justify-center items-center w-[20vh]">
      <Button
        color="default"
        variant="ghost"
        endContent={<Icon icon="uil:trash" width="24" height="24" />}
        className="text-orange-400"
      >
        Delete Chat
      </Button>
    </div>
  );
};

export default ClearChat;
