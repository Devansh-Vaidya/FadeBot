import React from "react";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";

export default function ChatImportExport() {
  return (
    <div className="flex justify-between items-center w-[15vh] px-4 me-2">
      <Tooltip content="Import">
        <Button isIconOnly className="bg-transparent">
          <Icon
            icon="circum:import"
            width="24"
            height="24"
            className="hover:text-orange-400"
          />
        </Button>
      </Tooltip>
      <span>|</span>
      <Tooltip content="Export">
        <Button isIconOnly className="bg-transparent">
          <Icon
            icon="circum:export"
            width="24"
            height="24"
            className="hover:text-orange-400"
          />
        </Button>
      </Tooltip>
    </div>
  );
}
