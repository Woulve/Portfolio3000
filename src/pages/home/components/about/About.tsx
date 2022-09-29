import React from "react";
import "./About.scss";
import meImage from "./me.png";

type Props = {};

const About = (props: Props) => {
    return (
        <div className="container" id="About">
            <div className="content">
                <div id="aboutcontent">
                    <div>
                        <img src={meImage} alt="Me" width="600px"></img>
                    </div>
                    <div id="abouttext">
                        <h1 className="content-header">Über mich</h1>
                        <p>
                            Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum
                            dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors
                            Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum
                            dolors Lorems ipsum dolors Lorems ipsum dolors Lorems ipsum dolors{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
