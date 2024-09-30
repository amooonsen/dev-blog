'use client';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Tech', image: '/placeholder.svg?height=200&width=300', href: '/tech' },
  { name: 'Newsletter', image: '/placeholder.svg?height=200&width=300', href: '/newsletter' },
  { name: 'Life', image: '/placeholder.svg?height=200&width=300', href: '/life' },
  { name: 'Contact', image: '/placeholder.svg?height=200&width=300', href: '/contact' },
];

export default function BlogMainCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link href={category.href} key={category.name}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
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
