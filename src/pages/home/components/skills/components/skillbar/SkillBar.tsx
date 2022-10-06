import React from "react";
import "./SkillBar.scss";
import { motion } from "framer-motion";

type Props = {
  skill: number;
};

const SkillBar = (props: Props) => {
  return (
    <div className="fullbar relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{
          width: `${props.skill}%`,
          transition: {
            duration: 0.8,
          },
        }}
        className={"skillbar flex justify-end h-6 relative"}
      ></motion.div>
    </div>
  );
};

export default SkillBar;
