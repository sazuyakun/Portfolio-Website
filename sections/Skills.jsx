"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { Languages, Frontend, Backend } from "../constants";

const Skills = () => (
  <section id="skills" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Skill-Set" textStyles="text-center" />
      <TitleText
        title={<>My Tech Expertise</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex justify-center w-full h-[550px]"
      >
        <img src="/techBack.png" alt="map" className="w-full h-full object-cover blur-2xl rounded-full md:w-[50%] opacity-50 rotate-180" />
        <div className="absolute flex flex-col w-full gap-3">
          <TypingText title="Languages and Tech" textStyles="text-center" />
          <div className="flex justify-center gap-8">
            {Languages.map((skill) => (
              <div className=" w-[85px] h-[85px] p-[6px] rounded-full bg-[#72757d]/50 hover:bg-white hover:scale-125 transition duration-500">
                <img
                  id={skill.id}
                  src={skill.imgUrl}
                  alt={skill.title}
                  className=" w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
          <TypingText title="Frontend Development" textStyles="text-center" />
          <div className="flex justify-center gap-8">
            {Frontend.map((skill) => (
              <div className=" w-[85px] h-[85px] p-[6px] rounded-full bg-[#72757d]/50 hover:bg-white hover:scale-125 transition duration-500">
                <img
                  id={skill.id}
                  src={skill.imgUrl}
                  alt={skill.title}
                  className=" w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
          <TypingText title="Backend Development" textStyles="text-center" />
          <div className="flex justify-center gap-8">
            {Backend.map((skill) => (
              <div className=" w-[85px] h-[85px] p-[6px] rounded-full bg-[#72757d]/50 hover:bg-white hover:scale-125 transition duration-500">
                <img
                  id={skill.id}
                  src={skill.imgUrl}
                  alt={skill.title}
                  className=" w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
