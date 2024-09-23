'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const texts = ['문.로그 :)', '조경문 블로그', '🌕 LOOGGG', `Hello! It's Moon`];

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
    height: '36px',
  };

  const textStyle = {
    position: 'absolute' as 'absolute',
    left: 0,
    right: 0,
  };

  return (
    <div id="logo" className="lg:min-w-[300px] h-[36px]">
      <Link
        href="/"
        className={`text-2xl`}
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
