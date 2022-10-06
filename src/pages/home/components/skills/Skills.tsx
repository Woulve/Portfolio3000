import React, { useContext } from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "App";
import { LazyMotion, domAnimation, m } from "framer-motion";
import SkillTable from "./components/skilltable/SkillTable";

import CarouselComponent from "./components/carousel/CarouselComponent";

type Props = {};

const Skills = (props: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container" id="Skills">
      <div className="content">
        <div className="skillsContainer">
          <LazyMotion features={domAnimation}>
            <m.div
              className="skillTypewriter"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 1.2,
                },
              }}
            >
              {language === "de" ? (
                <h1>Diese Seite nutzt&nbsp;</h1>
              ) : (
                <h1>This Site uses&nbsp;</h1>
              )}
              <Typewriter
                options={{
                  loop: true,
                  deleteSpeed: 20,
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Node")
                    .pauseFor(2500)
                    .deleteChars(4)
                    .typeString("Sass")
                    .pauseFor(2500)
                    .deleteChars(4)
                    .typeString("Typescript")
                    .pauseFor(2500)
                    .deleteChars(10)
                    .typeString("Framer Motion")
                    .pauseFor(2500)
                    .deleteChars(13)
                    .typeString("Jest JS")
                    .pauseFor(2500)
                    .deleteChars(7)
                    .typeString("React")
                    .pauseFor(2500)
                    .deleteChars(5)
                    .typeString("JQuery")
                    .pauseFor(2500)
                    .deleteChars(6)
                    .typeString("Tailwind CSS")
                    .pauseFor(2500)
                    .deleteChars(12)
                    .typeString("PostCSS")
                    .pauseFor(2500)
                    .deleteChars(7)
                    .start();
                }}
              />
            </m.div>
          </LazyMotion>
          <CarouselComponent />
          <div className="skilltextcontainer">
            <SkillTable />

            <div className="skilltextright">
              {language === "de" ? (
                <p>
                  Diese Website benutzt eine Vielzahl an modernen Technologien
                  und Frameworks, ist performant, und Mobile-Fähig.
                </p>
              ) : (
                <p>
                  This Website uses a number of modern Technologies and
                  Frameworks, is performant and Mobile-Capable.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
