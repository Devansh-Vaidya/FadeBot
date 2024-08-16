import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ModelDropdown = ({ model, changeModel }) => {
  const [selectedModel, setSelectedModel] = useState(model);

  return (
    <Dropdown className="bg-black bg-opacity-50 text-white">
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedModel} <Icon icon="akar-icons:chevron-down" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select Model"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedModel={selectedModel}
        onSelectionChange={(e) => {
          setSelectedModel(e.currentKey);
          changeModel(e.currentKey);
        }}
      >
        <DropdownItem key="Llama 3">Llama 3</DropdownItem>
        <DropdownItem key="Gemma 2">Gemma 2</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ModelDropdown;
