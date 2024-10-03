'use client';

import React, { ReactElement, useState } from 'react';

// constants
import { disperse } from '@/constants/destoryTextConst';
import { motion } from 'framer-motion';

interface DestoryTextProps {
  children: React.ReactNode;
}

export default function DestoryText({ children }: DestoryTextProps): ReactElement | null {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element: ReactElement) => {
    let chars: ReactElement[] = [];

    const word = element.props.children;

    word.split('').forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          custom={i}
          variants={disperse}
          animate={isAnimated ? 'open' : 'closed'}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  const manageMouseEnter = () => {
    setIsAnimated(true);
  };

  const manageMouseLeave = () => {
    setIsAnimated(false);
  };

  if (!React.isValidElement(children)) {
    return null;
  }

  const modifiedChild = React.cloneElement(children as React.ReactElement<any>, {
    onMouseEnter: manageMouseEnter,
    onMouseLeave: manageMouseLeave,
    className: `${children.props.className || ''} flex justify-between`,
  });

  return <>{React.cloneElement(modifiedChild, {}, getChars(children))}</>;
}
