import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function NavbarComp() {
  return (
    <Navbar isBordered maxWidth={"full"} className="bg-zinc-900">
      <NavbarBrand className="ms-4">
        <NavbarItem className="text-3xl pompiere-regular tracking-[1em]">FADEBOT</NavbarItem>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {/* For models to be added in future */}
      </NavbarContent>
      <NavbarContent justify="end" className="me-8">
        <NavbarItem className="text-xl arima-500">
          Llama 3
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
