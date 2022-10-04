import React, { useCallback } from "react";
import "./App.scss";
import Home from "pages/home/Home";
import Navbar from "components/navbar/Navbar";
import { linkItem } from "interfaces/app/interfaces";
import type { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const items: linkItem[] = [
    {
      key: 1,
      url: "About",
      title: "Über mich",
    },
    {
      key: 2,
      url: "Skills",
      title: "Skills",
    },
    {
      key: 3,
      url: "Contact",
      title: "Kontakt",
    },
  ];

  return (
    <>
      <div className="App">
        <Particles
          id="tsparticles"
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
        />
        <Navbar items={items}></Navbar>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
