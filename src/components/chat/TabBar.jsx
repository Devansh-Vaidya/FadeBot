import { Icon } from "@iconify/react";
import { Tabs, Tab, Button } from "@nextui-org/react";

export default function TabBar({
  tabs,
  activeTab,
  setActiveTab,
  addTab,
  removeTab,
}) {
  return (
    <div className="flex flex-col">
      <Tabs aria-label="Chats" key="underlined" variant="underlined">
        {tabs.map((tab, index) =>
          tab.id === -1 ? (
            <Tab
              key={tab.id}
              title={
                <div className="flex items-center space-x-2">
                  <span>{tab.title}</span>
                </div>
              }
              active={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ) : (
            <Tab
              key={tab.id}
              title={
                <div className="flex items-center space-x-2">
                  <span>{tab.title}</span>
                  <Button
                    className="bg-transparent text-red-400 hover:text-green-400"
                    onClick={() => removeTab(tab.id)}
                  >
                    x
                  </Button>
                </div>
              }
              active={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            ></Tab>
          )
        )}
      </Tabs>
    </div>
  );
}
