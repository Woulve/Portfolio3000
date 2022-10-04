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
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
            // viewport={{ once: true }}
            src={meImage}
            alt="Me"
            width="480px"
          ></motion.img>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.9,
              },
            }}
            viewport={{ once: true }}
            id="aboutText"
          >
            <h1 className="content-header">Elias Cecetka</h1>
            <h2 className="glitch">
              &#60; Fullstack Software Developer &#47;&#62;
            </h2>
            {language === "de" ? (
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
                <p>
                  I am a Junior Software Developer with experience in a variety
                  of technological environments and a passion for technology and
                  programming. Apart from my in-firm training, I gathered all my
                  knowledge and programming skills, from STM32 Microcontroller
                  Development to Fullstack Web development by myself.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
