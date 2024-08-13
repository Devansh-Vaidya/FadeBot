import "./App.css";
import "./fonts.css"
import Body from "./components/Body";
import NavbarComp from "./components/navbar/NavbarComp";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <NavbarComp />
        <Body />
      </main>
    </NextUIProvider>
  );
}

export default App;
