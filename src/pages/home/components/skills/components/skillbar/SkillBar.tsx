import React from "react";
import "./SkillBar.scss";
import { LazyMotion, domAnimation, m } from "framer-motion";

type Props = {
  skill: number;
};

const SkillBar = (props: Props) => {
  return (
    <div className="fullbar relative">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${props.skill}%`,
            transition: {
              duration: 0.8,
            },
          }}
          className={"skillbar flex justify-end h-6 relative"}
        ></m.div>
      </LazyMotion>
    </div>
  );
};

export default SkillBar;
