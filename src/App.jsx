import "./App.css";
import Body from "./components/Body";
import NavBarComp from "./components/navbar/NavBarComp";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <NavBarComp />
        <Body />
      </main>
    </NextUIProvider>
  );
}

export default App;
