import React, { useContext } from "react";
import { LanguageContext } from "App";
import { motion } from "framer-motion";
import "./About.scss";
import meImage from "./me.png";

type Props = {};

const About = (props: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container" id="About">
      <div className="backgroundBar"></div>
      <div className="content">
        <div id="aboutContainer">
          <motion.img
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.2 }}
            src={meImage}
            alt="Me"
            width="480px"
          ></motion.img>
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.2 }}
            id="aboutText"
          >
            <h1 className="content-header">Elias Cecetka</h1>
            <h2 className="glitch">
              &#60; Fullstack Software Developer &#47;&#62;
            </h2>
            {language === "ger" ? (
              <>
                <p>
                  Ich bin ein junger Fachinformatiker für Anwendungsentwicklung,
                  mit Erfahrung in einer vielzahl von Entwicklungsumgebungen,
                  und Freude am Entwickeln. Abgesehen von meiner Ausbildung,
                  habe ich mir sämtliches Wissen und Programmiersprachen, von
                  STM32 Mikrocontrollern bis zum Fullstack Web Development
                  selber beigebracht.
                </p>
              </>
            ) : (
              <>
                <p>The same but in english lol</p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
