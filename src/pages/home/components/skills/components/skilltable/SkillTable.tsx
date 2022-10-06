import React, { useContext } from "react";
import "./SkillTable.scss";
import SkillBar from "../skillbar/SkillBar";
import { LanguageContext } from "App";

type Props = {};

const SkillTable = (props: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="skilltable flex flex-row font-bold">
      <ul className="skillitemslist">
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
          <h3>Docker</h3>
        </li>
        <li className="skillitem">
          <h3>Python</h3>
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
      <div className="skillbars">
        <ul>
          <li>
            <SkillBar skill={80} />
          </li>
          <li>
            <SkillBar skill={78} />
          </li>
          <li>
            <SkillBar skill={74} />
          </li>
          <li>
            <SkillBar skill={67} />
          </li>
          <li>
            <SkillBar skill={65} />
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
  );
};

export default SkillTable;
