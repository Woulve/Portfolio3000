import React, { useContext } from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "App";
import { motion } from "framer-motion";

import SkillBar from "./components/skillbar/SkillBar";

import CarouselComponent from "./components/carousel/CarouselComponent";

type Props = {};

const Skills = (props: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container" id="Skills">
      <div className="content">
        <div className="skillsContainer">
          <motion.div
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
          </motion.div>
          <CarouselComponent />
          <div className="skilltextcontainer">
            <div className="skilltable flex flex-row font-bold">
              <ul>
                <li className="skillitem">
                  <h3>C</h3>
                </li>
                <li className="skillitem">
                  <h3>HTML/CSS</h3>
                </li>
                <li className="skillitem">
                  <h3>Perl</h3>
                </li>
                <li className="skillitem">
                  <h3>Javascript/React</h3>
                </li>
                <li className="skillitem">
                  <h3>Python</h3>
                </li>
                <li className="skillitem">
                  <h3>Docker</h3>
                </li>
                <li className="skillitem">
                  <h3>Java</h3>
                </li>
                <li className="skillitem">
                  <h3>MySQL/PostgreSQL</h3>
                </li>
                <li className="skillitem">
                  <h3>C#</h3>
                </li>
                <li className="skillitem">
                  <h3>Lua</h3>
                </li>
              </ul>
              <div className="skillbartext">
                <ul>
                  <li>
                    <SkillBar skill={85} />
                  </li>
                  <li>
                    <SkillBar skill={78} />
                  </li>
                  <li>
                    <SkillBar skill={74} />
                  </li>
                  <li>
                    <SkillBar skill={70} />
                  </li>
                  <li>
                    <SkillBar skill={50} />
                  </li>
                  <li>
                    <SkillBar skill={50} />
                  </li>
                  <li>
                    <SkillBar skill={40} />
                  </li>
                  <li>
                    <SkillBar skill={30} />
                  </li>
                  <li>
                    <SkillBar skill={20} />
                  </li>
                  <li>
                    <SkillBar skill={20} />
                  </li>
                </ul>

                <ul className="chart-levels">
                  <li>
                    <div className="levelbar" />
                    {language === "de" ? (
                      <span className=" leveltext">Neuling</span>
                    ) : (
                      <span className=" leveltext">Novice</span>
                    )}
                  </li>
                  <li>
                    <div className="levelbar" />
                    <span className="leveltext">Beginner</span>
                  </li>
                  <li>
                    <div className="levelbar" />
                    {language === "de" ? (
                      <span className=" leveltext">Erfahren</span>
                    ) : (
                      <span className=" leveltext">Advanced</span>
                    )}
                  </li>
                  <li>
                    <div className="levelbar" />
                    {language === "de" ? (
                      <span className=" leveltext">Experte</span>
                    ) : (
                      <span className=" leveltext">Expert</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="skilltextright">
              <p>
                Diese Website benutzt eine Vielzahl an modernen Technologien und
                Frameworks, ist performant, und Mobile-Optimiert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
