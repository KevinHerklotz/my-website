/* eslint-disable @next/next/no-img-element */
import type ActualImage from 'next/image'

type ImageProps = Parameters<typeof ActualImage>[0]

export default function Image({ alt, src, priority }: ImageProps) {
  return <img alt={alt || ''} src={`${src}`} loading={priority ? 'eager' : 'lazy'} />
}
