import React, { useContext } from "react";
import { LanguageContext } from "App";
import "./LanguageToggle.scss";

type Props = {};

const LanguageToggle = (props: Props) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <button onClick={toggleLanguage} className="languageButton ">
      {language === "de" ? "DE" : "EN"}
    </button>
  );
};

export default LanguageToggle;
