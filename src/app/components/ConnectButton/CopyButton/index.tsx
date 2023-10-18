'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useCopyToClipboard } from './useCopyToClipboard'

export default function CopyButton() {
  const [copyState, copyFn] = useCopyToClipboard()
  const supportsClipboard = !!navigator?.clipboard

  if (!supportsClipboard) return null

  return (
    <Button
      size="sm"
      className={cn(
        copyState === 'success' && 'hover:bg-green-200',
        copyState === 'error' && 'hover:bg-red-200'
      )}
      disabled={copyState === 'error'}
      variant="outline"
      onClick={() => {
        copyFn('hello@clean-code-kevin.ch')
      }}
    >
      <Image
        src={copyState === 'success' ? '/check.svg' : '/copy.svg'}
        alt="copy icon"
        className="mr-1 h-5 w-5"
        width={1}
        height={1}
      />{' '}
      {copyState === 'success' ? 'copied' : 'copy'}
    </Button>
  )
}
