"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className=" flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Portfolio
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>SOHAMSAMAL</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[100px] -mt-[50px]"
      >
        {/* <div className = "absolute w-full sm:h-[600px] h-[350px] hero-gradient rounded-tl-[140px] rounded-bl-[140px]  z-[0] -top-[10px] " /> */}
        <div className="flex gap-5">
          <div className="w-[50%] sm:h-[500px] h-[350px] rounded-tl-[140px] rounded-bl-[140px] relative">
            <img
              src="/cover.png"
              alt="cover"
              className=" w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] rounded-bl-[140px] z-[0] absolute"
            />
            <div className=" flex justify-center items-center w-full sm:h-[500px]  h-[350px] rounded-tl-[140px] rounded-bl-[140px] hover:bg-white/10 transition duration-500 z-[1] absolute opacity-0 hover:opacity-100 text-6xl text-white">HELLO</div>
          </div>
          <div className=" w-[50%] sm:h-[500px] h-[350px] object-cover z-10 relative ">
            <img
              src="/cover.png"
              alt="cover"
              className="w-full sm:h-[500px] h-[350px] object-cover z-[0] absolute "
            />
            <div className=" flex justify-center items-center w-full sm:h-[500px]  h-[350px] hover:bg-black/50 transition duration-500 z-[2] absolute opacity-0 hover:opacity-100 text-6xl text-white">HELLO</div>
            <div className=" w-full sm:h-[500px]  h-[350px] bg-gradient-to-l from-black z-[1] absolute "></div>
          </div>
        </div>
        <a href="#explore">
          <div className=" w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className=" sm:w-[155px] w-[100px] sm:h-[150px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
