type ToolItemProps = {
  name: string
  href: string
}

export default function ToolItem({ name, href }: ToolItemProps) {
  return (
    <li className="group relative m-1 overflow-hidden p-0.5 transition-transform hover:scale-[1.05]">
      <span className="absolute inset-0 rounded bg-white bg-gradient-to-br from-amber-700 to-rose-700 transition-all group-hover:bg-gradient-to-bl" />
      <a
        href={href}
        target="_blank"
        className="relative block rounded bg-background p-2 text-xl sm:p-3 sm:text-2xl"
      >
        {name}
      </a>
    </li>
  )
}
