type ToolItemProps = {
  name: string
  href: string
}

export default function ToolItem({ name, href }: ToolItemProps) {
  return (
    <li className="py-2 transition-transform hover:scale-[1.05]">
      <a
        href={href}
        target="_blank"
        className="rounded bg-neutral-300 p-2 text-xl sm:p-3 sm:text-2xl"
      >
        {name}
      </a>
    </li>
  )
}
