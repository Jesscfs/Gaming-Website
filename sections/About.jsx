'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Gaming Consoles" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        In 1972, the very first video game home console the---<span className="font-extrabold text-white">Odyssey</span>---
        was manufactured by <span className="font-extrabold text-white">Magnavox</span>{' '} 
        It inspired other companies to the forefront to create better consoles, very much like the ones we still play to this day.
        There are 9 console generations from different manufactures which includes {' '}
        <span className="font-extrabold text-white">Nintendo,</span>{' '}
        <span className="font-extrabold text-white">Microsoft,</span>{' '}
        <span className="font-extrabold text-white">
          Sony.
        </span>{' '}
        With many consoles to choose from , this has created a dilema among fans to decide which gaming console is the best.
        Come join us in the debate of what is the best console that will fulfill a person's need; from video game home console to a handheld gaming console
        for those that want to play anywhere they want. 
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;