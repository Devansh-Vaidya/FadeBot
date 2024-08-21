import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

// Component for selecting and changing a bot model from a dropdown menu
export default function ModelDropdown({ model, changeModel, botModels }) {
  return (
    <Dropdown className="text-white bg-zinc-950 bg-opacity-80">
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {model} <Icon icon="akar-icons:chevron-down" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select Model"
        variant="bordered"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={new Set([model])}
        onSelectionChange={(models) => {
          changeModel(Array.from(models).join(", "));
        }}
      >
        {Object.keys(botModels).map((botModel) => (
          <DropdownItem key={botModel}>{botModel}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
