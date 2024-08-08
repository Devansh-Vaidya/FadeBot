import "./App.css";
import Body from "./components/Body";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="text-2xl">Vite + React</div>
      <Body />
    </NextUIProvider>
  );
}

export default App;
