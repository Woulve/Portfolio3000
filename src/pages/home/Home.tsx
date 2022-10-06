import React from "react";
import "./Home.scss";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

const Home = () => {
  return (
    <>
      <div className="blurred"></div>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
};

export default Home;
