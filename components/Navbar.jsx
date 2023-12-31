'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial = "hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className=" absolute w-[60%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className=' font-extrabold text-[24px] leading-[30px]' >
        <span className="text-orange-600">SO</span>
        <span className=' text-white'>HAM</span>
      </h2>
      <div className="flex gap-11">
      <img
        src="./search.svg"
        alt = "search"
        className="w-[24px] h-[24px] object-contain"
      />
      <img
        src="/menu.svg"
        alt="menu"
        className=' w-[24px] h-[24px] object-contain'
      />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
