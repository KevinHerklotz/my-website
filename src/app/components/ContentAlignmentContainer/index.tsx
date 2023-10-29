import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function ContentAlignmentContainer({ children, className }: Props) {
  return (
    <div className={cn('w-full max-w-screen-lg px-4 md:px-16 lg:m-auto', className)}>
      {children}
    </div>
  )
}
