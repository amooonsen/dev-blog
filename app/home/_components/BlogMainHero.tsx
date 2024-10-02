'use client';

import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BlogHeroImage from '@/assets/images/typescript_oop_1.png';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsLoaded(true);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  const paragraphVariants = {
    hidden: { y: 50 },
    visible: (i: number) => ({
      y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <section className="relative h-[50vh] flex items-center justify-center mb-16 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-45 z-10 backdrop-blur-md"></div>
      <Image
        src={BlogHeroImage}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        className="z-0"
        priority
      />
      <div className="relative z-20 text-center text-white px-4 max-w-3xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          {['개발자', '조경문', '|', 'moon'].map((word, i) => (
            <motion.span key={i} custom={i} variants={titleVariants} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <div className="relative">
          {[
            '웹 프론트엔드 개발자 입니다.',
            '주로 React로 개발을 하며, WebGL과 UI 인터렉션에 많은 관심이 있습니다.',
            '언제나 고객의 입장에서 제품을 바라봅니다.',
          ].map((sentence, i) => (
            <div key={i} className="relative overflow-hidden h-8 mb-2">
              <motion.p
                className="text-lg md:text-xl leading-relaxed absolute w-full"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={i}
                variants={paragraphVariants}
              >
                {sentence}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
