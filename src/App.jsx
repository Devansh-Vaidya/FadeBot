import "./App.css";
import "./fonts.css";
import { useState } from "react";
import Body from "./components/Body";
import NavBarComp from "./components/navbar/NavBarComp";
import bgWallpaper from "./assets/bg-wallpaper.jpg";

export default function App() {
  const botModels = {
    "Llama 3": "llama-3.1-70b-versatile",
    "Gemma 2": "gemma2-9b-it",
  };
  const [model, setModel] = useState(Object.keys(botModels)[0]);

  // Change the model
  const changeModel = (modelName) => {
    setModel(modelName);
  };

  return (
    <div className="min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgWallpaper})` }}
      ></div>
      <NavBarComp model={model} changeModel={changeModel} botModels={botModels} />
      <Body model={botModels[model]} />
    </div>
  );
}
