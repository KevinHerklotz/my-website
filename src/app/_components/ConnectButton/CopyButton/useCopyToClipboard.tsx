// inspired by this hook: https://usehooks-ts.com/react-hook/use-copy-to-clipboard

import { useEffect, useRef, useState } from 'react'

type CopyState = 'success' | 'error' | null
type CopyFn = (text: string) => void

type Props = {
  keepStateDuration?: number // in milliseconds
}

export function useCopyToClipboard({ keepStateDuration }: Props): [CopyState, CopyFn] {
  const [copyState, setCopyState] = useState<CopyState>(null)
  const timeoutID = useRef<NodeJS.Timeout>(undefined)

  const copyFn: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      setCopyState('error')
      return
    }

    if (keepStateDuration) {
      timeoutID.current = setTimeout(() => {
        setCopyState(null)
      }, keepStateDuration)
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopyState('success')
    } catch (error) {
      setCopyState('error')
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutID.current)
    }
  }, [])

  return [copyState, copyFn]
}
