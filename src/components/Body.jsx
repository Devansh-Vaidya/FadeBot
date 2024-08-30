import { useState } from "react";
import TabBar from "./chat/TabBar";
import ChatHistory from "./chat/ChatHistory";
import ChatBar from "./chat/ChatBar";
import GroqBot from "../utils/Bots.js";

export default function Body({ model }) {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Chat 1", chatList: [] },
    { id: -1, title: "+" },
  ]);
  const [idCounter, setIdCounter] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const updateChat = async (chatList, inputPrompt) => {
    let updatedChat = [...chatList, { role: "user", content: inputPrompt }];
    updateTabChatList(activeTab, updatedChat);
    let response = await GroqBot(model, updatedChat);
    updatedChat = [...updatedChat, { role: "system", content: response }];
    updateTabChatList(activeTab, updatedChat);
  };

  const updateTabChatList = (tabId, updatedList) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === tabId ? { ...tab, chatList: updatedList } : tab
      )
    );
  };

  const clearList = (tabId) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => (tab.id === tabId ? { ...tab, chatList: [] } : tab))
    );
  };

  const addTab = () => {
    setIdCounter(idCounter + 1);
    let newTab = {
      id: idCounter,
      title: `Chat ${idCounter}`,
      chatList: [],
    };
    setTabs([...tabs, newTab]);
    setActiveTab(idCounter);
  };

  const removeTab = (tabId) => {
    // Remove the tab
    let remainingTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(remainingTabs);

    // Switch to the first remaining tab if the active tab is removed
    if (activeTab === tabId && remainingTabs.length > 0) {
      setTabs(remainingTabs);
      setActiveTab(remainingTabs[0].id);
    } else if (remainingTabs.length === 0) {
      setIdCounter(1);
      let defaultTab = { id: 1, title: "Chat 1", chatList: [] };
      setTabs([defaultTab]);
      setActiveTab(defaultTab.id);
    }
  };

  const importChatHistory = (chatHistory) => {
    updateTabChatList(activeTab, chatHistory);
  };

  return (
    <div className="flex flex-col relative z-10">
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        addTab={addTab}
        removeTab={removeTab}
      />
      <ChatHistory
        chatList={tabs.find((tab) => tab.id === activeTab).chatList}
      />
      <ChatBar
        updateChat={(inputPrompt) => {
          // Find the chatList of the active tab
          let chatList = tabs.find((tab) => tab.id === activeTab).chatList;

          // Update the chatList
          updateChat(chatList, inputPrompt);
        }}
        clearList={() => {
          clearList(activeTab);
        }}
        chatList={tabs.find((tab) => tab.id === activeTab).chatList}
        importChatHistory={importChatHistory}
      />
    </div>
  );
}
