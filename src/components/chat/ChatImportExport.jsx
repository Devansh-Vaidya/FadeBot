import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";
import { saveAs } from "file-saver";

export default function ChatImportExport({
  chatList,
  importChatHistory,
}) {
  function importChat(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const chat = JSON.parse(e.target.result);
        importChatHistory(chat);
      } catch (error) {
        console.error("Error parsing JSON file", error);
      }
    };

    reader.readAsText(file);
  }

  function exportChat() {
    const blob = new Blob([JSON.stringify(chatList, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "chat-history.json");
  }

  return (
    <div className="flex justify-between items-center w-[15vh] px-4 me-2">
      <Tooltip content="Import">
        <Button isIconOnly className="bg-transparent">
          <label>
            <Icon
              icon="circum:import"
              width="24"
              height="24"
              className="hover:text-amber-500"
            />
            <input
              type="file"
              className="hidden"
              onChange={importChat}
              accept=".json"
            />
          </label>
        </Button>
      </Tooltip>
      <span>|</span>
      <Tooltip content="Export">
        <Button isIconOnly className="bg-transparent" onClick={exportChat}>
          <Icon
            icon="circum:export"
            width="24"
            height="24"
            className="hover:text-amber-500"
          />
        </Button>
      </Tooltip>
    </div>
  );
}
