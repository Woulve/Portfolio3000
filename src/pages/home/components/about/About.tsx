import React from "react";
import "./About.scss";
import meImage from "./me.png";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="container" id="About">
      <div className="content">
        <div id="aboutContainer">
          <img src={meImage} alt="Me" width="480px"></img>
          <div id="aboutText">
            <h1 className="content-header">Über mich</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
