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
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className=" font-extrabold text-white">Metaverse </span>
        became a household word when Facebook rebranded its
        corporate identity to Meta in October 2021 and announced plans to invest
        at least $10 billion in the concept that year. In addition to Meta, tech
        giants including Google, Microsoft, Nvidia and Qualcomm are also
        investing billions of dollars in the concept. Management consultancy
        McKinsey & Company has bullishly predicted that the metaverse economy
        could reach $5 trillion by 2030. E-commerce is expected to be the
        dominant engine, with gaming, entertainment, education and marketing in
        the metaverse also becoming important sectors.
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
