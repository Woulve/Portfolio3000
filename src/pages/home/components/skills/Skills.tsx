import React, { useContext } from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "App";

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
                  .typeString("React")
                  .pauseFor(2500)
                  .deleteChars(5)
                  .typeString("Typescript")
                  .pauseFor(2500)
                  .deleteChars(10)
                  .typeString("Tailwind CSS")
                  .pauseFor(2500)
                  .deleteChars(12)
                  .typeString("PostCSS")
                  .pauseFor(2500)
                  .deleteChars(7)
                  .typeString("Sass")
                  .pauseFor(2500)
                  .deleteChars(4)
                  .typeString("Node")
                  .pauseFor(2500)
                  .deleteChars(4)
                  .typeString("JQuery")
                  .pauseFor(2500)
                  .deleteChars(6)
                  .typeString("FlexBox")
                  .pauseFor(2500)
                  .deleteChars(7)
                  .typeString("Docker")
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
              ipsum dolors Lorems ipsum dolors Lorems ipsum dolors{" "}
            </p>
            <p>react tailwindcss postcss autoprefixer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
