import Image from 'next/image'
import ToolItem from './components/ToolItem'
import Citation from './components/Citation'
import Carousel from './components/Carousel'
import ConnectButton from './components/ConnectButton'
import backgroundImage from './_background/background.jpg'
import ContentAlignmentContainer from './components/ContentAlignmentContainer'

export default function Home() {
  return (
    <div className="relative">
      <header className="sticky top-0 z-20 -mb-10  h-10">
        <div className="flex justify-end gap-2 pr-2 pt-2 opacity-80 invert">
          <a
            title="Email me"
            href="mailto:hello@clean-code-kevin.ch"
            target="_blank"
            className="hover:opacity-70"
          >
            <Image src="/envelope-square.svg" alt="Email icon" width={22} height={22} />
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
        </div>
      </header>
      <main className="text-xl font-light sm:text-2xl md:text-3xl">
        <div className="relative">
          <Image
            src={backgroundImage}
            alt="background image mountains"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-transparent to-background">
            <h1 className="text-center text-4xl font-medium [text-shadow:_0_0_10px_#000] sm:text-5xl md:text-7xl 2xl:text-9xl">
              Hi! I&apos;m Kevin,
            </h1>
          </div>
        </div>
        <div className="mb-12 flex flex-col items-center justify-between gap-4 pb-4 sm:gap-8 sm:pb-16 md:gap-16">
          <ContentAlignmentContainer className="z-30 px-8 text-center text-2xl sm:text-3xl md:text-4xl">
            <p className="leading-normal">
              a dedicated <strong className="font-semibold">Senior Frontend Developer</strong> with
              11 years of experience in web development. I work as a{' '}
              <strong className="font-semibold">Freelancer</strong> in Switzerland. I&apos;m very
              experienced in e-commerce business, having worked for{' '}
              <a
                className="text-primary hover:text-orange-400"
                href="https://www.ricardo.ch"
                target="_blank"
              >
                Ricardo
              </a>{' '}
              in Zug for more than 4 years.
            </p>
          </ContentAlignmentContainer>
          <div className="relative my-8 flex place-items-center before:absolute before:-inset-10 before:rounded-full before:bg-gradient-to-b before:from-amber-600 before:via-transparent before:to-yellow-500 before:opacity-50 before:blur-3xl before:content-['']">
            <Image
              src="https://avatars.githubusercontent.com/u/9254854"
              alt="picture of myself"
              className="border-1 h-40 w-40 rounded-full border-solid border-orange-900/25 drop-shadow-md sm:h-[250px] sm:w-[250px]"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className="mb-8">
            <ConnectButton />
          </div>
          <ContentAlignmentContainer>
            <section className="rounded-2xl bg-gradient-to-br from-yellow-700 to-fuchsia-900 p-6 sm:p-10">
              <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">What I love</h2>
              <ul className="pl-4 text-left -indent-4">
                <li>
                  I love <span className="font-medium">clean</span> code.
                </li>
                <li>
                  I love to write meaningful <span className="font-medium">tests</span>.
                </li>
                <li>
                  I love to do <span className="font-medium">reviews</span> (It helps me and others
                  to grow).
                </li>
                <li>
                  I love to set up and use <span className="font-medium">tools</span> that help to
                  write better code.
                </li>
                <li>
                  I love to think in the <span className="font-medium">user</span>&apos;s
                  perspective.
                </li>
                <li>
                  I love to work in a <span className="font-medium">team</span>.
                </li>
                <li>
                  I love my <span className="font-medium">job</span>.
                </li>
              </ul>
            </section>
          </ContentAlignmentContainer>
          <section className="relative mt-8 max-w-full before:absolute before:-inset-8 before:rounded-full before:bg-gradient-to-br before:from-yellow-700 before:via-blue-100 before:to-pink-100 before:opacity-5 before:blur-2xl before:content-['']">
            <h2 className="mb-4 text-center text-3xl font-medium sm:mb-8 sm:text-4xl">
              Success stories
            </h2>
            <ContentAlignmentContainer>
              <Carousel />
            </ContentAlignmentContainer>
          </section>

          <ContentAlignmentContainer>
            <section className="rounded-2xl bg-gradient-to-b from-[#1c2145] to-[#231430] p-6 text-center sm:p-10">
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
                <ToolItem name="Tailwind" href="https://tailwindcss.com/" />
                <ToolItem name="Node.js" href="https://nodejs.org/" />
                <ToolItem name="Express" href="https://expressjs.com/" />
                <ToolItem name="axios" href="https://axios-http.com/" />
                <ToolItem name="downshift" href="https://www.downshift-js.com/" />
                <ToolItem name="Webpack" href="https://webpack.js.org/" />
                <ToolItem name="Sentry" href="https://sentry.io/" />
                <ToolItem name="Jest" href="https://jestjs.io/" />
                <ToolItem name="Vitest" href="https://vitest.dev/" />
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
                <ToolItem name="Zustand" href="https://github.com/pmndrs/zustand" />
                <ToolItem name="Zod" href="https://zod.dev/" />
              </ul>
            </section>
          </ContentAlignmentContainer>
          <ContentAlignmentContainer>
            <section className="rounded-2xl bg-gradient-to-br from-cyan-950 to-violet-950 p-6 sm:p-10">
              <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">
                Where I get my inspiration from
              </h2>
              <ul className="text-left ">
                <li className="flex">
                  <Image
                    src="/at-solid.svg"
                    alt="Internet icon"
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://kentcdodds.com/blog"
                      className="text-primary hover:text-orange-400"
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
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://www.youtube.com/@mattpocockuk"
                      className="text-primary hover:text-orange-400"
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
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw"
                      className="text-primary hover:text-orange-400"
                      target="_blank"
                    >
                      Ben Awad
                    </a>{' '}
                    <span className="text-lg sm:text-2xl">
                      (for the humor and in depth tutorials)
                    </span>
                  </span>
                </li>
                <li className="flex align-top">
                  <Image
                    src="/youtube.svg"
                    alt="Youtube icon"
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://www.youtube.com/@Fireship"
                      className="text-primary hover:text-orange-400"
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
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://www.youtube.com/@TraversyMedia"
                      className="text-primary hover:text-orange-400"
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
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://thisweekinreact.com/"
                      className="text-primary hover:text-orange-400"
                      target="_blank"
                    >
                      This Week In React
                    </a>
                  </span>
                </li>
                <li className="flex align-top">
                  <Image
                    src="/envelope.svg"
                    alt="Email icon"
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://reactnewsletter.com/"
                      className="text-primary hover:text-orange-400"
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
                    className="mr-2 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://bytes.dev/"
                      className="text-primary hover:text-orange-400"
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
                    className="mr-3.5 mt-1 h-7 w-7 opacity-70 invert sm:h-9 sm:w-9"
                    width={1}
                    height={1}
                  />
                  <span>
                    <a
                      href="https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073"
                      className="text-primary hover:text-orange-400"
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
          </ContentAlignmentContainer>
          <ContentAlignmentContainer>
            <section className="rounded-2xl bg-gradient-to-br from-fuchsia-900 to-yellow-700 p-6 sm:p-10">
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
          </ContentAlignmentContainer>
          <ContentAlignmentContainer>
            <section className="rounded-2xl bg-gradient-to-br from-cyan-800 to-fuchsia-950 p-6 sm:p-10">
              <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">
                You need more infos?
              </h2>
              <p>
                Look at my full CV on{' '}
                <a
                  className="text-primary hover:text-orange-400"
                  href="https://www.linkedin.com/in/kevin-herklotz-70407a153"
                  target="_blank"
                >
                  my LinkedIn page
                </a>
                .
              </p>
            </section>
          </ContentAlignmentContainer>
        </div>
      </main>
    </div>
  )
}
