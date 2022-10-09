import React, { useContext } from "react";
import { LanguageContext } from "App";
import { LazyMotion, domAnimation, m } from "framer-motion";
import "./About.scss";
import meImage from "./me.webp";

type Props = {};

const About = (props: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container" id="About">
      <div className="backgroundBar"></div>

      <div className="content">
        <div id="aboutContainer">
          <LazyMotion features={domAnimation}>
            <m.img
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
              src={meImage}
              alt="Me"
              className="meImage"
            ></m.img>
            <m.div
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
              id="aboutText"
            >
              <h1 className="content-header">Elias Cecetka</h1>
              <h2 className="glitch">
                &#60; Fullstack Software Developer &#47;&#62;
              </h2>
              {language === "de" ? (
                <>
                  <p>
                    Ich bin ein junger Fachinformatiker für
                    Anwendungsentwicklung, mit Erfahrung in einer Vielzahl von
                    Entwicklungsumgebungen, und Freude am Entwickeln. Abgesehen
                    von meiner Ausbildung habe ich mir sämtliche Kenntnisse und
                    Programmiersprachen, von embedded STM32 Development auf
                    Hardware-Ebene mit C, bis zum Fullstack Web Development mit
                    React in meiner Freizeit selbst beigebracht.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I am a Junior Software Developer with experience in a
                    variety of technological environments, and a passion for
                    programming. Apart from my in-firm training, I gathered all
                    my knowledge and programming skills, from STM32
                    Microcontroller Development with C, to Fullstack Web
                    development with React by myself.
                  </p>
                </>
              )}
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default About;
