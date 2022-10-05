import React from "react";
import "./CarouselComponent.scss";

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

const CarouselComponent = (props: Props) => {
  return (
    <div className="carouselcontainer">
      <div className="carouselclass">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactLogo className="logo" />
        </a>
        <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
          <JqueryLogo className="logo" />
        </a>
        <a href="https://docker.com" target="_blank" rel="noopener noreferrer">
          <DockerLogo className="logo" />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TailwindcssLogo className="logo" />
        </a>
        <a
          href="https://postcss.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PostcssLogo className="logo" />
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <NodejsLogo className="logo" />
        </a>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SassLogo className="logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TypescriptLogo className="logo" />
        </a>
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FramerLogo className="logo" />
        </a>
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
          <JestLogo className="logo" viewBox="0 0 300 270" />
        </a>
      </div>
      <div className="carouselclass2">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactLogo className="logo" />
        </a>
        <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
          <JqueryLogo className="logo" />
        </a>
        <a href="https://docker.com" target="_blank" rel="noopener noreferrer">
          <DockerLogo className="logo" />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TailwindcssLogo className="logo" />
        </a>
        <a
          href="https://postcss.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PostcssLogo className="logo" />
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <NodejsLogo className="logo" />
        </a>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SassLogo className="logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TypescriptLogo className="logo" />
        </a>
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FramerLogo className="logo" />
        </a>
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
          <JestLogo className="logo" viewBox="0 0 300 270" />
        </a>
      </div>
    </div>
  );
};

export default CarouselComponent;
