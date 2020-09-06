import React from 'react';
import { motion } from 'framer-motion';

import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <motion.div
      className='footer'
      initial={{ y: 425 }}
      transition={{ duration: 1.5 }}
      animate={{ y: '-4rem' }}
      exit={{ y: 425 }}
    >
      {/* <p className='footer__quote'>
        "This is literally the most catered coding challenge I've ever seen,
        and I've seen them all"
      </p>
      <cite className='footer__author'>Daniil Molodkov, BrainStation</cite> */}
    </motion.div>
  )
}

export default Footer