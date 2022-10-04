import React, { useContext } from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "App";
import Carousel from "framer-motion-carousel";

import { ReactComponent as ReactLogo } from "./icons/ReactLogo.svg";
import { ReactComponent as JqueryLogo } from "./icons/JqueryLogo.svg";
import { ReactComponent as DockerLogo } from "./icons/DockerLogo.svg";
import { ReactComponent as TailwindcssLogo } from "./icons/TailwindcssLogo.svg";
import { ReactComponent as PostcssLogo } from "./icons/PostcssLogo.svg";
import { ReactComponent as NodejsLogo } from "./icons/NodejsLogo.svg";
import { ReactComponent as SassLogo } from "./icons/SassLogo.svg";
import { ReactComponent as TypescriptLogo } from "./icons/TypescriptLogo.svg";
import { ReactComponent as FramerLogo } from "./icons/FramerLogo.svg";
import { ReactComponent as JestLogo } from "./icons/JestLogo.svg";

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
                  .typeString("Docker")
                  .pauseFor(2500)
                  .deleteChars(7)
                  .typeString("Framer Motion")
                  .pauseFor(2500)
                  .deleteChars(12)
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
          <div className="iconcarousel">
            <ReactLogo className="logo" />
            <JqueryLogo className="logo" />
            <DockerLogo className="logo" />
            <TailwindcssLogo className="logo" />
            <PostcssLogo className="logo" />
            <NodejsLogo className="logo" />
            <SassLogo className="logo" />
            <TypescriptLogo className="logo" />
            <FramerLogo className="logo" />
            <JestLogo className="logo" viewBox="0 0 300 270" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
