'use client';
import React from 'react';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Tech', image: '/placeholder.svg?height=200&width=300', href: '/docs/tech' },
  { name: 'Newsletter', image: '/placeholder.svg?height=200&width=300', href: '/docs/newsletter' },
  { name: 'Life', image: '/placeholder.svg?height=200&width=300', href: '/docs/life' },
];

export default function BlogMainCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-10 lg:mt-16 px-6 lg:px-10">
      {categories.map((category) => (
        <Link href={category.href} key={category.name}>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 1000 }}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="p-4 bg-black bg-opacity-50 text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
