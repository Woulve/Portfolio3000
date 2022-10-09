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
                  Diese Website ist mit dem React Framework entstanden,
                  performant und Mobile-Fähig. <br />
                  Ich besitze gute Kenntnisse in der Entwicklung auf
                  Hardware-Ebene, möchte jedoch zukünftig meine Fähigkeiten in
                  Hardwarefernen Umgebungen, wie z.B. im Web-Development (sowohl
                  Front- als auch Backend), Mobile-Development,
                  Desktop-Development, und API development verbessern.
                  <br />
                  <br />
                  Ich bin ein Fan von Effizienz und modernen Technologien, und
                  motiviert neues zu lernen.
                </p>
              ) : (
                <p>
                  This Website was written using the React Framework, is
                  Performance-optimized, and Mobile-capable.
                  <br />I have good knowledge in the Development with
                  Hardware-close environments, but my future goal is to improve
                  my capabilities in more abstracted environments, e.g.
                  Web-Development (both Frontend & Backend), Mobile-Development,
                  Desktop-Development and API-Development.
                  <br />
                  <br />I am a fan of efficiency and modern technologies, and I
                  am motivated to learn new skills.
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
