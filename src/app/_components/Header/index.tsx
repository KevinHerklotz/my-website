import Image from 'next/image'

const Header = () => {
  return (
    <header className="relative top-0 z-10 -mb-10 h-10 min-[1120px]:sticky min-[1120px]:invert">
      <div className="flex justify-end gap-2 pr-0.5 pt-0.5 xs:pr-2 xs:pt-2">
        <a
          title="Email me"
          href="mailto:hello@clean-code-kevin.ch"
          target="_blank"
          className="opacity-70 hover:opacity-90"
        >
          <Image src="/envelope-square.svg" alt="Email icon" width={22} height={22} priority />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/kevin-herklotz-70407a153/"
          className="opacity-70 hover:opacity-90"
          target="_blank"
        >
          <Image src="/linkedin.svg" alt="Linkedin icon" width={22} height={22} priority />
        </a>
        <a
          title="Github"
          href="https://github.com/KevinHerklotz/"
          className="opacity-70 hover:opacity-90"
          target="_blank"
        >
          <Image src="/github.svg" alt="Github icon" width={22} height={22} priority />
        </a>
      </div>
    </header>
  )
}

export default Header
