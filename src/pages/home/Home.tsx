import React, { useEffect, useState } from "react";
import "./Home.scss";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  const [barval, setbarval] = useState("|");
  useEffect(() => {
    const interval = setInterval(() => {
      if (barval === "|") {
        setbarval("");
      } else {
        setbarval("|");
      }
    }, 500);

    return () => clearInterval(interval);
  }, [barval]);

  return (
    <>
      <Helmet>
        <title>Elias Cecetka{barval}</title>
      </Helmet>
      <div className="blurred"></div>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
};

export default Home;
