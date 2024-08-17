import "./App.css";
import "./fonts.css";
import { useState } from "react";
import Body from "./components/Body";
import NavBarComp from "./components/navbar/NavBarComp";
import bgWallpaper from "./assets/bg-wallpaper.jpg";

export default function App() {
  const [model, setModel] = useState("Llama 3");

  // Change the model
  const changeModel = (modelName) => {
    setModel(modelName);
    console.log("Model changed to", modelName);
  };

  return (
    <div className="min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgWallpaper})` }}
      ></div>
      <NavBarComp model={model} changeModel={changeModel} />
      <Body model={model} />
    </div>
  );
}
