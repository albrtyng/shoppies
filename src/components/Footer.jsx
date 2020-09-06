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
    ></motion.div>
  )
}

export default Footer