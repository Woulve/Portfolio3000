import React, { useContext, useState } from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "App";

import CarouselComponent from "./components/CarouselComponent";

type Props = {};

const Skills = (props: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container" id="Skills">
      <div className="content">
        <div id="skillsContainer">
          <div id="skillTypewriter">
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

                  .typeString("Docker")
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
          </div>
          <div id="skilltext">
            <p>
              Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems
              ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum
              dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors
              Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems
              ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum
              dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors
              Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems
              ipsum dolors Lorems ipsum dolors Lorems ipsum dolors
            </p>
          </div>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default Skills;
