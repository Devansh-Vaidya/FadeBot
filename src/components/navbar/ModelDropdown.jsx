import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ModelDropdown({ model, changeModel }) {
  const [selectedModels, setSelectedModels] = useState(new Set([model]));

  return (
    <Dropdown className="bg-black bg-opacity-50 text-white">
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {Array.from(selectedModels).join(", ")}{" "}
          <Icon icon="akar-icons:chevron-down" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select Model"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedModels}
        onSelectionChange={(models) => {
          setSelectedModels(models);
          changeModel(Array.from(models).join(", "));
        }}
      >
        <DropdownItem key="Llama 3">Llama 3</DropdownItem>
        <DropdownItem key="Gemma 2">Gemma 2</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
