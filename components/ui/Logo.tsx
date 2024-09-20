'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { BMJUA } from '@/assets/fonts/fonts';

const texts = ['문.로그 :)', '조경문 블로그', '🌕 LOOGGG'];

const Logo: React.FC = () => {
  const [text, setText] = useState('Moon.log');
  const [prevText, setPrevText] = useState('');
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    if (!isHover) {
      setPrevText(text);
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setText(randomText);
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => {
    setPrevText(text);
    setText('Moon.log');
    setIsHover(false);
  };

  const containerStyle = {
    position: 'relative' as 'relative',
    overflow: 'hidden',
    height: '1em',
  };

  const textStyle = {
    position: 'absolute' as 'absolute',
    left: 0,
    right: 0,
  };

  return (
    <div id="logo" className="min-w-[200px] h-[45px]">
      <Link
        href="/"
        className={`${BMJUA.className} text-4xl font-semibold`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'block' }}
      >
        <div style={containerStyle}>
          <motion.span
            style={textStyle}
            initial={{ y: 0 }}
            animate={{ y: isHover ? '-150%' : 0 }}
            transition={{ duration: 0.3 }}
          >
            {prevText || 'Moon.log'}
          </motion.span>
          <motion.span
            style={textStyle}
            initial={{ y: '150%' }}
            animate={{ y: isHover ? 0 : '150%' }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
