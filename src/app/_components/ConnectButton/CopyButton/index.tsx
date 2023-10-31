'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useCopyToClipboard } from './useCopyToClipboard'

export default function CopyButton() {
  const [copyState, copyFn] = useCopyToClipboard({ keepStateDuration: 2000 })
  const supportsClipboard = !!navigator?.clipboard

  if (!supportsClipboard) return null

  return (
    <Button
      size="sm"
      className={cn(
        copyState === 'success' && 'bg-green-600 hover:bg-green-600',
        copyState === 'error' && 'bg-red-600'
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
        className="mr-1 h-5 w-5 invert"
        width={1}
        height={1}
      />{' '}
      {copyState === 'success' ? 'copied' : 'copy'}
    </Button>
  )
}
