'use client';

import {motion} from 'framer-motion'
import {socials} from '../constants'
import styles from '../styles'
import { footerVariants } from '../utils/motion';

let year = new Date().getFullYear();

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className=' footer-gradient '/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className = "flex items-center justify-between flex-wrap gap-5">
        <h4 className=' font-bold md:text-[64px] text-[44px] text-white'>
          Enter the Metaverse
        </h4>
      </div>
      <div className="flex flex-col">
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>

        <div className='flex items-center justify-between flew-wrap gap-4'>
          <h4 className='font-extrabold text-[24px]'><span className="text-orange-600">SO</span>
        <span className=' text-white'>HAM</span></h4>
          <p className=' font-normal text-[14px] text-white opacity-50'>
          Copyright © {year-1} - {year}. All rights reserved
          </p>
          <div className='flex gap-4 '>
            {socials.map((social) => (
              <a href={social.link} target="_blank">
              <img 
                key={social.name}
                src={social.url}
                alt={social.name}
                className='w-[24px] h-[24px] object-contain'
              />
              </a>
            ))}

          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
