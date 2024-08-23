import ClearChat from "./ClearChat";
import ChatInput from "./ChatInput";
import ChatImportExport from "./ChatImportExport";

export default function ChatBar({ updateList, clearList }) {
  return (
    <div className="flex h-[10vh] py-8 border-t-2 border-zinc-800">
      <ClearChat clearList={clearList} />
      <ChatInput updateList={updateList} />
      <ChatImportExport />
    </div>
  );
}
