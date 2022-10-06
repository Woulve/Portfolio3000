import React, { createContext, useCallback, useState } from "react";
import "./App.scss";
import Home from "pages/home/Home";
import Navbar from "components/navbar/Navbar";
import LanguageToggle from "components/languagetoggle/LanguageToggle";
import type { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";
import { MobileView, BrowserView } from "react-device-detect";

interface LanguageContextProps {
  language: "de" | "en";
  setLanguage?: React.Dispatch<React.SetStateAction<string>>;
  toggleLanguage?: () => void;
}

export const LanguageContext = createContext({} as LanguageContextProps);

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const [language, setLanguage] = useState("de" as "de" | "en");

  const toggleLanguage = () => {
    if (language === "de") {
      setLanguage("en");
    } else {
      setLanguage("de");
    }
  };

  return (
    <>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <div className="App">
          {/* <BrowserView> */}
          <Particles
            id="tsparticles"
            options={particlesOptions as ISourceOptions}
            init={particlesInit}
          />
          {/* </BrowserView> */}
          <Navbar></Navbar>
          <LanguageToggle />
          <Home />
        </div>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
