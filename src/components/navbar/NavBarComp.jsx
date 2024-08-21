import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import ModelDropdown from "./ModelDropdown";

export default function NavBarComp({ model, changeModel, botModels }) {
  return (
    <Navbar
      isBordered
      maxWidth={"full"}
      className="bg-zinc-950 h-[10vh] bg-opacity-0"
    >
      <NavbarBrand className="ms-4">
        <NavbarItem className="text-3xl kode-mono tracking-[0.5em]">
          FADEBOT
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {/* For models to be added in future */}
      </NavbarContent>
      <NavbarContent justify="end" className="me-8">
        <NavbarItem className="text-xl arima-500">
          <ModelDropdown model={model} changeModel={changeModel} botModels={botModels} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
