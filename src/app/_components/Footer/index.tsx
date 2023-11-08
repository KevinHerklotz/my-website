import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=" mb-4 flex justify-center gap-2 invert min-[1120px]:hidden">
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
    </footer>
  )
}

export default Footer
