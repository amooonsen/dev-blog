'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import logoTexts from '@/constants/logoTextConst';

const Logo: React.FC = () => {
  const [text, setText] = useState('Moon.log');
  const [prevText, setPrevText] = useState('');
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    if (!isHover) {
      setPrevText(text);
      const randomText = logoTexts[Math.floor(Math.random() * logoTexts.length)];
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
    position: 'relative' as const,
    overflow: 'hidden',
    height: '36px',
  };

  const textStyle = {
    position: 'absolute' as const,
    left: 0,
    right: 0,
  } as const;

  return (
    <div id="logo" className="lg:min-w-[300px] h-[36px]">
      <Link
        href="/home"
        className={`text-2xl font-semibold`}
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
