'use client';

import {motion} from 'framer-motion'
import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import {techStack} from '../constants'

const Skills = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
    <TypingText title="| People on the world" 
      textStyles="text-center"
    />
    <TitleText
      title = {(
        <>
          Track friends around you.
        </>
      )}
      textStyles="text-center"
    />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex justify-center w-full h-[550px]'
      >
        <img 
          src="/map.png"
          alt="map"
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col w-full'>
        <TypingText title="Front-end" 
      textStyles="text-center"
    />
        <div className='flex justify-evenly'>
        <div className=' top-[0px] left-[0px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#72757d]/20 hover:bg-white hover:scale-125 transition duration-500'>
          <img 
            src='people-01.png' alt='skill'
            className=' w-full h-full rounded-full'
          />
        </div>
        <div className=' top-[0px] left-[0px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#72757d]/20 hover:bg-white hover:scale-125 transition duration-500'>
          <img 
            src='people-02.png' alt='skill'
            className=' w-full h-full rounded-full'
          />
        </div>
        </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
