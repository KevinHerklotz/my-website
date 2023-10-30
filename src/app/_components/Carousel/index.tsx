/* eslint-disable react/no-unescaped-entities */

'use client'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'
import { motion } from 'framer-motion'
import ConnectButton from '../ConnectButton'

export default function Carousel() {
  return (
    <div className="relative pb-12 font-light">
      <motion.span
        className="absolute inset-0 bottom-0 top-0 rounded-2xl border-2 border-solid border-neutral-500 transition-all duration-75"
        initial={{ left: -100, right: -100 }}
        whileInView={{ left: 0, right: 0 }}
        viewport={{
          once: true,
          amount: 0.05,
        }}
      />
      <Slider
        dots
        speed={300}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
        ]}
        className="font-light"
      >
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Optimizing costs and user experience
          </h3>
          <p className="text-justify">
            Given that Ricardo has millions of page views every day, excessive API requests from
            common elements like the header and search bar had a direct impact on costs and loading
            times. This led me to introduce "react-query", a client-side caching library. My proof
            of concept could reduce the amount of API calls significantly, which resulted in a
            faster user experience. This innovation now serves as the standard for frontend API
            interactions at Ricardo, delivering daily cost savings.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Optimizing website performance and SEO
          </h3>
          <p className="text-justify">
            I was constantly monitoring Ricardo's core web vitals, not only to ensure having great
            SEO on technical side, but also a fast and seamless user experience. I implemented
            strategies such as lazy loading unnecessary code and automatic image optimization to
            reduce file sizes by up to 80% without noticeable quality loss. The outcome of this
            continuous effort was that the website became much faster, especially on mobile devices,
            which also improved Ricardo's ranking in Google's search results.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Automatic error monitoring
          </h3>
          <p className="text-justify">
            Earlier this year, I implemented Sentry for Ricardo, a crucial tool that monitors errors
            occurring in users' browsers. This initiative uncovered more than 20 hidden bugs, some
            of which directly impacted our revenue. Thanks to this proactive error monitoring, we
            were able to fix these issues promptly, ensuring a smoother experience for our users.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Enhancing testing infrastructure
          </h3>
          <p className="text-justify">
            Following an intensive workshop with Kent C. Dodds, the creator of "Testing Library", my
            colleague and I revamped our testing approach. We established useful test wrappers for
            our code, simplifying the testing process. Additionally, I documented common test
            scenarios with example code and provided valuable feedback on pull requests from other
            developers. Consequently, Ricardo's test coverage surged from 30% to an impressive 70%.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Automated Dead Code Detection
          </h3>
          <p className="text-justify">
            With hundreds of thousands of lines of code in Ricardo's frontend, I was looking for a
            solution to automatically identify and remove unused or unnecessary code. Leveraging the
            right tools, I successfully pinpointed and removed 10'000 lines of "dead code". This
            implementation is now an integral part of our CI/CD pipeline, ensuring codebase
            cleanliness and substantial time savings in the future.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Less bugs thanks to type safety
          </h3>
          <p className="text-justify">
            Ricardo faced unpredictable bugs due to incorrect or missing types. To address this, I
            undertook a substantial refactoring of TypeScript types across our entire codebase. This
            did not only improve type safety significantly but also surfaced and resolved numerous
            known and even unknown bugs. Fewer bugs equate to happier users, ultimately contributing
            to an overall boost in satisfaction.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Standardizing codebase for faster development
          </h3>
          <p className="text-justify">
            Managing 8 different "micro frontends" at Ricardo with 60'000 lines each posed a unique
            challenge. Creating a Ricardo-specific ESLint rules package helped to ensure consistency
            across projects. I spearheaded this effort and made sure that all different repositories
            have an aligned codebase by enforcing uniform code structure, naming conventions,
            testing practices, and much more. This helped streamlining the collaboration across
            teams and also helped to catch bugs before they could affect production.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Winning the Ricardo Hackathon
          </h3>
          <p className="text-justify">
            Ok, to be honest I took home the trophy in the "Funniest Contribution" category at the
            Ricardo hackathon. While not directly related to technical skills, it highlights my
            ability to inject humor and creativity into my work. I added a few entertaining easter
            eggs on the Ricardo Website, but I won't disclose all of them here. For a little fun,
            try to type "party" in{' '}
            <a
              href="https://www.ricardo.ch"
              className="text-cyan-700 hover:opacity-70"
              target="_blank"
              tabIndex={-1} // tabbing causes issues with the carousel
            >
              Ricardo's search bar
            </a>{' '}
            without hitting enter.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <h3 className="mb-4 text-center text-2xl font-medium sm:mb-8 sm:text-3xl">
            Let's connect and elevate your next project
          </h3>
          <p className="text-justify">
            As you've journeyed through my experiences and contributions, I appreciate your interest
            in my work. If you're interested to learn more or discuss how we can collaborate on
            exciting projects, please don't hesitate to reach out. Let's connect and explore the
            possibilities together. Your next software solution could be just a conversation away!
          </p>
          <div className="mt-16 text-center">
            <ConnectButton />
          </div>
        </div>
      </Slider>
    </div>
  )
}
