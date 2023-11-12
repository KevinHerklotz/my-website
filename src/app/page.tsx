import Image from 'next/image'
import ToolItem from './_components/ToolItem'
import Citation from './_components/Citation'
import Carousel from './_components/Carousel'
import ConnectButton from './_components/ConnectButton'
import backgroundImage from './_background/background.jpg'
import ContentAlignmentContainer from './_components/ContentAlignmentContainer'
import Header from './_components/Header'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <div className="relative">
      <Header />
      {/* overflow-hidden is important for the bright gleam behind success stories */}
      <main className="overflow-x-hidden text-xl font-light sm:text-2xl md:text-3xl">
        <div className="relative">
          <Image
            src={backgroundImage}
            alt="background image mountains"
            priority
            placeholder="blur"
            sizes="100vw" // https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-using-a-static-import
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-transparent to-background">
            <h1 className="text-center text-4xl font-medium [text-shadow:_0_0_10px_#000] sm:text-5xl md:text-7xl 2xl:text-9xl">
              Hi! I&apos;m Kevin,
            </h1>
          </div>
        </div>
        <div className="mb-12 flex flex-col items-center justify-between gap-4 pb-4 sm:gap-8 sm:pb-16 md:gap-16">
          <ContentAlignmentContainer className="px-8 text-center text-2xl sm:text-3xl md:text-4xl">
            <p className="leading-normal">
              a dedicated <strong className="font-semibold">Senior Frontend Developer</strong> with
              11 years of experience in web development. I work as a{' '}
              <strong className="font-semibold">Freelancer</strong> in Switzerland
              <Image
                src="/flag-ch.svg"
                alt="swiss flag"
                className="mb-[0.2em] ml-[0.2em] mr-0.5 inline h-[0.7em] w-[0.7em] opacity-90"
                width={1}
                height={1}
                priority
              />
              . I am very proficient with large-scale applications, having worked for
              Switzerland&apos;s biggest marketplace (
              <a
                className="text-primary hover:text-orange-400"
                href="https://www.ricardo.ch"
                target="_blank"
              >
                Ricardo
              </a>
              ) for more than 4 years.
            </p>
          </ContentAlignmentContainer>
          <div className="relative flex flex-col place-items-center py-8 before:absolute before:-inset-10 before:rounded-full before:bg-gradient-to-b before:from-amber-600/70 before:via-amber-400/40 before:to-yellow-500/60 before:opacity-30 before:blur-3xl">
            <Image
              src="https://avatars.githubusercontent.com/u/9254854"
              alt="picture of myself"
              className="h-40 w-40 rounded-full drop-shadow-md sm:h-[16rem] sm:w-[16rem]"
              width={250}
              height={250}
              priority
            />
          </div>
          {/* there is an ugly bug in Chrome at about 1500px width, the negative margin looks better than
              putting it inside the div above */}
          <div className="-mt-16">✅ Currently available</div>
          <div className="py-8">
            <ConnectButton />
          </div>
          <ContentAlignmentContainer>
            <section className="rounded-2xl bg-gradient-to-br from-yellow-700 to-fuchsia-950 p-6 pb-4 sm:p-10 sm:pb-6 lg:text-center">
              <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">Testimonials</h2>
              <Citation
                quote="Kevin knows perfectly how to balance between shipping fast and shipping clean."
                who="Valentin, principal engineer at Ricardo"
              />
              <Citation
                quote="He is so effective, I suspect that they are 2 Kevins"
                who="Benoît, senior developer at Ricardo"
              />
              <Citation
                quote="I would lead a war in the company to have you back as an engineer"
                who="Jeremy, senior developer and my former manager"
              />
              <Citation
                quote="Kevin is one of the best Frontend developers I ever worked with."
                who="Maciej, senior developer at Ricardo"
              />
            </section>
          </ContentAlignmentContainer>

          <section className="relative mt-8 max-w-full before:absolute before:-inset-8 before:rounded-[15rem] before:bg-gradient-to-br before:from-pink-100 before:via-blue-100 before:to-violet-200 before:opacity-[6%] before:blur-2xl before:content-['']">
            <h2 className="mb-4 text-center text-3xl font-medium sm:mb-8 sm:text-4xl">
              Success stories
            </h2>
            <ContentAlignmentContainer>
              <Carousel />
            </ContentAlignmentContainer>
          </section>

          <ContentAlignmentContainer>
            <section className="rounded-2xl bg-gradient-to-b from-[#1c2145] to-[#231430] p-6 text-center sm:p-10">
              <h2 className="mb-4 text-3xl font-medium sm:mb-8 sm:text-4xl">My tech stack</h2>

              <ul className="flex flex-wrap justify-center gap-4">
                <ToolItem name="TypeScript" href="https://www.typescriptlang.org/" />
                <ToolItem name="React" href="https://react.dev/" />
                <ToolItem name="Next.js" href="https://nextjs.org/" />
                <ToolItem name="Tailwind" href="https://tailwindcss.com/" />
                <ToolItem name="SCSS" href="https://sass-lang.com/" />
                <ToolItem name="tanstack/react-query" href="https://tanstack.com/query" />
                <ToolItem name="Redux" href="https://redux.js.org/" />
                <ToolItem name="Material-UI" href="https://mui.com/" />
                <ToolItem name="Node.js" href="https://nodejs.org/" />
                <ToolItem name="Express" href="https://expressjs.com/" />
                <ToolItem name="Webpack" href="https://webpack.js.org/" />
                <ToolItem name="Sentry" href="https://sentry.io/" />
                <ToolItem name="Storybook" href="https://storybook.js.org/" />
                <ToolItem name="ESLint" href="https://eslint.org/" />
                <ToolItem name="Jest" href="https://jestjs.io/" />
                <ToolItem name="Vitest" href="https://vitest.dev/" />
                <ToolItem name="(React) Testing Library" href="https://testing-library.com/" />
                <ToolItem name="Cypress" href="https://www.cypress.io/" />
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
              <ul className="text-left">
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
                <li className="align-to mb-0.5 flex">
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
      <Footer />
    </div>
  )
}
