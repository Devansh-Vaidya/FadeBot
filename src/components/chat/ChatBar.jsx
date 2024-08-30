import ClearChat from "./ClearChat";
import ChatInput from "./ChatInput";
import ChatImportExport from "./ChatImportExport";

export default function ChatBar({
  updateChat,
  clearList,
  chatList,
  importChatHistory,
}) {
  return (
    <div className="flex h-[10vh] py-auto border-t-2 border-zinc-800">
      <ClearChat clearList={clearList} />
      <ChatInput updateChat={updateChat} />
      <ChatImportExport
        chatList={chatList}
        importChatHistory={importChatHistory}
      />
    </div>
  );
}
