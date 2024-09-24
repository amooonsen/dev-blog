'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Header from '@/components/screen/Header';
import Footer from '@/components/screen/Footer';

// constnats
// import { slide, opacity, perspective } from '@/constants/pageTransitionConst';

// const anim = (variants: Variants) => {
//   return {
//     initial: 'initial',
//     animate: 'enter',
//     exit: 'exit',
//     variants,
//   };
// };

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      id="content"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}
