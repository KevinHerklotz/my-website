'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CopyButton from './CopyButton'

export default function ConnectButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="group relative overflow-hidden rounded-md p-0.5">
          {/* border with gradient */}
          <span className="absolute inset-0 bg-white bg-gradient-to-br from-yellow-600 to-orange-600 transition-all group-hover:from-yellow-500 group-hover:to-orange-500" />
          {/* white gleam */}
          {isInView && (
            <span className="animate-custom1 absolute inset-0 bg-gradient-to-br from-transparent from-45% via-white to-transparent to-55% opacity-0" />
          )}
          {/* actual content of button */}
          <span
            className="relative block rounded-md bg-[#42351F] px-8 py-2 text-xl sm:p-3 sm:text-2xl"
            ref={ref}
          >
            LET&apos;S CONNECT
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Say hello</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>
            Let&apos;s connect on{' '}
            <a
              href="https://www.linkedin.com/in/kevin-herklotz-70407a153/"
              className="font-bold text-primary hover:text-orange-400"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>
            Or simply send me an email:
            <br />
            <span className="flex gap-2 max-[450px]:flex-col max-[450px]:gap-4 min-[451px]:items-center">
              <a
                href="mailto:hello@clean-code-kevin.ch"
                className="font-bold text-primary hover:text-orange-400"
                target="_blank"
              >
                hello@clean-code-kevin.ch
              </a>
              <CopyButton />
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
