import Image from 'next/image'
import ToolItem from './components/ToolItem'
import Citation from './components/Citation'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <>
      <header className="flex justify-end gap-2 pr-2 pt-2 opacity-80">
        <a
          title="Email me"
          href='mailto:"kevin.herklotz@proton.me"'
          className="flex items-center hover:opacity-70"
          target="_blank"
        >
          <div className=" flex h-[22px] w-[22px] justify-center rounded-sm bg-black">
            <Image
              src="/envelope.svg"
              alt="Email icon"
              width={17}
              height={17}
              className="opacity-90 invert"
            />
          </div>
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/kevin-herklotz-70407a153/"
          className="hover:opacity-70"
          target="_blank"
        >
          <Image src="/linkedin.svg" alt="Linkedin icon" width={22} height={22} />
        </a>
        <a
          title="Github"
          href="https://github.com/KevinHerklotz/"
          className="hover:opacity-70"
          target="_blank"
        >
          <Image src="/github.svg" alt="Github icon" width={22} height={22} />
        </a>
      </header>

      <main className="mb-12 flex flex-col items-center justify-between gap-12 px-4 py-4 text-center text-xl font-light sm:gap-24 sm:py-16 sm:text-2xl md:px-16 md:text-3xl lg:m-auto lg:max-w-screen-lg">
        <div>
          <div className="relative flex place-items-center before:absolute before:-z-20 before:h-[300px] before:w-[350px] before:max-w-full before:-translate-y-1/3 before:rounded-full before:bg-gradient-radial before:from-orange-100 before:to-transparent before:opacity-60 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:max-w-full after:translate-y-1/3 after:bg-gradient-radial after:from-sky-100 after:via-blue-100 after:blur-3xl after:content-['']">
            <Image
              src="https://avatars.githubusercontent.com/u/9254854"
              alt="picture of myself"
              className="border-1 -mb-6 h-40 w-40 rounded-full border-solid border-orange-900/25 drop-shadow-md sm:h-[250px] sm:w-[250px]"
              width={250}
              height={250}
              priority
            />
          </div>
        </div>
        <section>
          <h1 className="mb-8 text-4xl font-medium sm:text-5xl">Hi! I&apos;m Kevin,</h1>
          <p className="leading-normal">
            a dedicated <strong className="font-semibold">Senior Frontend Developer</strong> with 11
            years of experience in web development. I work as a{' '}
            <strong className="font-semibold">Freelancer</strong> in Switzerland. I&apos;m very
            experienced in e-commerce business, having worked for{' '}
            <a
              className="text-cyan-700 hover:opacity-70"
              href="https://www.ricardo.ch"
              target="_blank"
            >
              Ricardo
            </a>{' '}
            in Zug for more than 4 years.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">What I love</h2>
          <ul className="text-left ">
            <li>
              <span className="font-medium">I love</span>{' '}
              <span className="text-red-900">clean</span> code.
            </li>
            <li>
              <span className="font-medium">I love</span> to write meaningful{' '}
              <span className="text-red-900">tests</span>.
            </li>
            <li>
              <span className="font-medium">I love</span> to do{' '}
              <span className="text-red-900">reviews</span> (It helps me and others to grow).
            </li>
            <li>
              <span className="font-medium">I love</span> to set up and use{' '}
              <span className="text-red-900">tools</span> that help to write better code.
            </li>
            <li>
              <span className="font-medium">I love</span> to think in the{' '}
              <span className="text-red-900">user</span>&apos;s perspective.
            </li>
            <li>
              <span className="font-medium">I love</span> to work in a{' '}
              <span className="text-red-900">team</span>.
            </li>
            <li>
              <span className="font-medium">I love</span> my{' '}
              <span className="text-red-900">job</span>.
            </li>
          </ul>
        </section>
        <section className="max-w-full">
          <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">Success stories</h2>
          <Carousel />
        </section>
        <section>
          <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">Tools</h2>
          <h3 className="mb-8 text-2xl font-medium sm:text-3xl">Tools I love the most</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            <ToolItem name="TypeScript" href="https://www.typescriptlang.org/" />
            <ToolItem name="tanstack/react-query" href="https://tanstack.com/query" />
            <ToolItem name="(React) Testing Library" href="https://testing-library.com/" />
            <ToolItem name="ESLint" href="https://eslint.org/" />
          </ul>
          <h3 className="mb-8 mt-16 text-2xl font-medium sm:text-3xl">Other tools I use</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            <ToolItem name="Next.js" href="https://nextjs.org/" />
            <ToolItem name="React" href="https://react.dev/" />
            <ToolItem name="Redux" href="https://redux.js.org/" />
            <ToolItem name="Babel" href="https://babeljs.io/" />
            <ToolItem name="Storybook" href="https://storybook.js.org/" />
            <ToolItem name="Material-UI" href="https://mui.com/" />
            <ToolItem name="SCSS" href="https://sass-lang.com/" />
            <ToolItem name="Node.js" href="https://nodejs.org/" />
            <ToolItem name="Express" href="https://expressjs.com/" />
            <ToolItem name="axios" href="https://axios-http.com/" />
            <ToolItem name="downshift" href="https://www.downshift-js.com/" />
            <ToolItem name="Webpack" href="https://webpack.js.org/" />
            <ToolItem name="Sentry" href="https://sentry.io/" />
            <ToolItem name="Jest" href="https://jestjs.io/" />
            <ToolItem name="Cypress" href="https://www.cypress.io/" />
            <ToolItem name="depcheck" href="https://github.com/depcheck/depcheck" />
            <ToolItem name="ts-prune" href="https://github.com/nadeesha/ts-prune" />
            <ToolItem name="axe" href="https://github.com/dequelabs/axe-core" />
            <ToolItem name="Asana" href="https://asana.com/" />
            <ToolItem name="Notion" href="https://www.notion.so/" />
            <ToolItem name="VSCode" href="https://code.visualstudio.com/" />
            <ToolItem name="Github" href="https://github.com/KevinHerklotz" />
            <ToolItem name="Google Analytics" href="https://analytics.google.com/" />
            <ToolItem name="Launchdarkly" href="https://launchdarkly.com/" />
          </ul>
          <h3 className="mb-8 mt-16 text-2xl font-medium sm:text-3xl">
            Tools I would love to use more regularly
          </h3>
          <ul className="flex flex-wrap justify-center gap-4">
            <ToolItem name="GraphQL" href="https://graphql.org/" />
            <ToolItem name="Tailwind" href="https://tailwindcss.com/" />
            <ToolItem name="Zustand" href="https://github.com/pmndrs/zustand" />
            <ToolItem name="Zod" href="https://zod.dev/" />
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">
            Where I get my inspiration from
          </h2>
          <ul className="text-left ">
            <li className="flex">
              <Image
                src="/at-solid.svg"
                alt="Internet icon"
                className="mr-2 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://kentcdodds.com/blog"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  Kent C. Dodds
                </a>{' '}
                <span className="text-lg sm:text-2xl">
                  (he loves clean code and testing as much as I do)
                </span>
              </span>
            </li>
            <li className="flex align-top">
              <Image
                src="/youtube.svg"
                alt="Youtube icon"
                className="mr-2 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://www.youtube.com/@mattpocockuk"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  Matt Pocock
                </a>{' '}
                <span className="text-lg sm:text-2xl">(a TypeScript genius)</span>
              </span>
            </li>
            <li className="flex align-top">
              <Image
                src="/youtube.svg"
                alt="Youtube icon"
                className="mr-2 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  Ben Awad
                </a>{' '}
                <span className="text-lg sm:text-2xl">(for the humor and in depth tutorials)</span>
              </span>
            </li>
            <li className="flex align-top">
              <Image
                src="/youtube.svg"
                alt="Youtube icon"
                className="mr-2 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://www.youtube.com/@Fireship"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  Fireship
                </a>{' '}
                <span className="text-lg sm:text-2xl">(the more humor the better)</span>
              </span>
            </li>
            <li className="flex align-top">
              <Image
                src="/youtube.svg"
                alt="Youtube icon"
                className="mr-2 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://www.youtube.com/@TraversyMedia"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  TraversyMedia
                </a>{' '}
                <span className="text-lg sm:text-2xl">(very detailed tutorials)</span>
              </span>
            </li>
            <li className="flex align-top">
              <Image
                src="/envelope.svg"
                alt="Email icon"
                className="mr-2 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://reactnewsletter.com/"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  React Newsletter
                </a>
              </span>
            </li>
            <li className="flex align-top">
              <Image
                src="/envelope.svg"
                alt="Email icon"
                className="mr-2 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://bytes.dev/"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  Bytes Newsletter
                </a>
              </span>
            </li>
            <li className="flex align-top">
              <Image
                src="/book.svg"
                alt="Book icon"
                className="mr-3.5 mt-1 h-7 w-7 sm:h-9 sm:w-9"
                width={1}
                height={1}
              />
              <span>
                <a
                  href="https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073"
                  className="text-cyan-700 hover:opacity-70"
                  target="_blank"
                >
                  The Clean Coder:{' '}
                  <span className="text-lg sm:text-2xl">
                    A Code of Conduct for Professional Programmers (Robert C. Martin)
                  </span>
                </a>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">
            What others say about me
          </h2>
          <Citation
            quote="He is so effective, I suspect that they are 2 Kevins"
            who="Benoît, senior developer and former colleague"
          />
          <Citation
            quote="Kevin knows perfectly how to balance between shipping fast and shipping clean."
            who="Valentin, principal engineer and former colleague"
          />
          <Citation
            quote="I would lead a war in the company to have you back as an engineer"
            who="Jeremy, senior developer and my former manager"
          />
          <Citation
            quote="Kevin is one of the best Frontend developers I ever worked with."
            who="Maciej, senior developer and former colleague"
          />
        </section>
        <section>
          <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">You need more infos?</h2>
          <p>
            Look at my full CV on{' '}
            <a
              className="text-cyan-700 hover:opacity-70"
              href="https://www.linkedin.com/in/kevin-herklotz-70407a153"
              target="_blank"
            >
              my LinkedIn page
            </a>
            .
          </p>
        </section>
      </main>
      {/* <footer>© Kevin Herklotz</footer> */}
    </>
  )
}
