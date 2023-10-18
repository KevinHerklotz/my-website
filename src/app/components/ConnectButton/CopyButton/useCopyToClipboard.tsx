// inspired by this hook: https://usehooks-ts.com/react-hook/use-copy-to-clipboard

import { useState } from 'react'

type CopyState = 'success' | 'error' | null
type CopyFn = (text: string) => void

export function useCopyToClipboard(): [CopyState, CopyFn] {
  const [copyState, setCopyState] = useState<CopyState>(null)

  const copyFn: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      setCopyState('error')
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopyState('success')
    } catch (error) {
      setCopyState('error')
    }
  }

  return [copyState, copyFn]
}
