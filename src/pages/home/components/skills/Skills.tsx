import React, { useContext, useState } from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "App";

import CarouselComponent from "./components/CarouselComponent";

type Props = {};

const Skills = (props: Props) => {
  const { language } = useContext(LanguageContext);
  const [activeItem, setActiveItem] = useState("React");

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
                  .callFunction(() => {
                    setActiveItem("React");
                  })
                  .typeString("React")
                  .pauseFor(2500)
                  .deleteChars(5)
                  .callFunction(() => {
                    setActiveItem("JQuery");
                  })
                  .typeString("JQuery")
                  .pauseFor(2500)
                  .deleteChars(6)
                  .callFunction(() => {
                    setActiveItem("Docker");
                  })
                  .typeString("Docker")
                  .pauseFor(2500)
                  .deleteChars(6)
                  .callFunction(() => {
                    setActiveItem("Tailwind CSS");
                  })
                  .typeString("Tailwind CSS")
                  .pauseFor(2500)
                  .deleteChars(12)
                  .callFunction(() => {
                    setActiveItem("PostCSS");
                  })
                  .typeString("PostCSS")
                  .pauseFor(2500)
                  .deleteChars(7)
                  .callFunction(() => {
                    setActiveItem("Node");
                  })
                  .typeString("Node")
                  .pauseFor(2500)
                  .deleteChars(4)
                  .callFunction(() => {
                    setActiveItem("Sass");
                  })
                  .typeString("Sass")
                  .pauseFor(2500)
                  .deleteChars(4)
                  .callFunction(() => {
                    setActiveItem("Typescript");
                  })
                  .typeString("Typescript")
                  .pauseFor(2500)
                  .deleteChars(10)
                  .callFunction(() => {
                    setActiveItem("Framer Motion");
                  })
                  .typeString("Framer Motion")
                  .pauseFor(2500)
                  .deleteChars(13)
                  .callFunction(() => {
                    setActiveItem("Jest JS");
                  })
                  .typeString("Jest JS")
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
          <CarouselComponent activeItem={activeItem} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
