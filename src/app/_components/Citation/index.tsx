'use client'

import { motion } from 'framer-motion'

type CitationProps = {
  quote: string
  who: string
}

export default function Citation({ quote, who }: CitationProps) {
  return (
    <>
      <blockquote className="relative inline-block w-auto max-w-3xl overflow-hidden rounded-md border-2 border-solid border-neutral-100 border-opacity-50 bg-white bg-opacity-10 p-3 font-extralight italic">
        <motion.div
          className="absolute -bottom-5 -top-5 w-[10%] rotate-[20deg] bg-gradient-to-r from-transparent from-30% via-white to-70% opacity-10"
          initial={{ left: '-10%' }}
          whileInView={{ left: '110%' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{
            once: true,
            amount: 0.05,
          }}
        />
        &quot;{quote}&quot;
      </blockquote>
      <figcaption className="-mt-1 mb-6 text-lg sm:mb-10 sm:text-2xl">({who})</figcaption>
    </>
  )
}
