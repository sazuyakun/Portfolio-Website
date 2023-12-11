"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Hello there, I am 
        <span className=" font-extrabold text-white"> Soham</span>
        , a sophomore pursuing B.Tech in Computer Science Engineering in NIT Rourkela. I am an enthusiast with a motive to learn something new every day in the domain of technology. I like to do Web Development. 
      </motion.p>

      <motion.img 
        variants = {fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrowDown"
        className=" w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
