import ClearChat from "./ClearChat";
import ChatInput from "./ChatInput";
import ChatImportExport from "./ChatImportExport";

const ChatBar = (props) => {
  return (
    <div className="flex h-[10vh] py-8 border-t-2 border-zinc-800">
      <ClearChat />
      <ChatInput updateList={props.updateList} />
      <ChatImportExport />
    </div>
  );
};

export default ChatBar;
