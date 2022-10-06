import React, { createContext, useState, useCallback } from "react";
import "./App.scss";
import Home from "pages/home/Home";
import Navbar from "components/navbar/Navbar";
import LanguageToggle from "components/languagetoggle/LanguageToggle";
import type { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
// import { BrowserView } from "react-device-detect";
import { loadFull } from "tsparticles";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0vfVZ1dEhxIs4Rh87e6y0DeqNxSYOgHQ",

  authDomain: "cecetkatech-44e2c.firebaseapp.com",

  projectId: "cecetkatech",

  storageBucket: "cecetkatech.appspot.com",

  messagingSenderId: "275863905201",

  appId: "1:275863905201:web:e4671fffe8adcc37d29390",

  measurementId: "G-3SHPL20FYL",
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

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
          <Particles
            id="tsparticles"
            options={particlesOptions as ISourceOptions}
            init={particlesInit}
          />
          <Navbar></Navbar>
          <LanguageToggle />
          <Home />
        </div>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
