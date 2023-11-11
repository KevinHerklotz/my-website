import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignore: [
    '__mocks__', // used for jest mocks
    'src/components/ui/**', // shadcn-ui components get put here, for now I gonna keep them as they are
  ],
  ignoreDependencies: [
    'sharp', // needed by Next.js image optimization in production (actually Vercel provides that)
    'eslint-config-next', // is needed, because we extend 'next/core-web-vitals' in eslint
    '@radix-ui/react-dialog', // is used by shadcn components
    '@radix-ui/react-slot', // is used by shadcn components
    'class-variance-authority', // is used by shadcn components
    'lucide-react', // is used by shadcn components
  ],
}

export default config
