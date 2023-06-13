const assertFunctionGenerator = ({ variants, queries }) => {
  const assertFunctions = []

  variants.forEach((variant) => {
    queries.forEach((query) => {
      assertFunctions.push(`screen.${variant}${query}`)
    })
  })
  return assertFunctions
}

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier', // always keep this the last item in the list
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/*.test.tsx'],
      plugins: ['jest'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: [
              'expect',
              ...assertFunctionGenerator({
                variants: ['get', 'getAll', 'find', 'findAll'],
                queries: [
                  'ByLabelText',
                  'ByPlaceholderText',
                  'ByText',
                  'ByAltText',
                  'ByTitle',
                  'ByDisplayValue',
                  'ByRole',
                  'ByTestId',
                  'ByTextWithMarkup',
                ],
              }),
            ],
          },
        ],
      },
    },
  ],
}
