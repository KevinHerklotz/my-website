import Image from 'next/image'

const Header = () => {
  return (
    <header className="relative z-20 -mb-10 h-10">
      <div className="flex justify-end gap-2 pr-2 pt-2">
        <a
          title="Email me"
          href="mailto:hello@clean-code-kevin.ch"
          target="_blank"
          className="opacity-70 hover:opacity-90"
        >
          <Image src="/envelope-square.svg" alt="Email icon" width={22} height={22} />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/kevin-herklotz-70407a153/"
          className="opacity-70 hover:opacity-90"
          target="_blank"
        >
          <Image src="/linkedin.svg" alt="Linkedin icon" width={22} height={22} />
        </a>
        <a
          title="Github"
          href="https://github.com/KevinHerklotz/"
          className="opacity-70 hover:opacity-90"
          target="_blank"
        >
          <Image src="/github.svg" alt="Github icon" width={22} height={22} />
        </a>
      </div>
    </header>
  )
}

export default Header
