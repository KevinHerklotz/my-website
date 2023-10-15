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
    'plugin:@typescript-eslint/strict',
    'next/core-web-vitals',
    'prettier', // always keep this the last item in the list
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
  },
  overrides: [
    {
      files: ['src/components/ui/**'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**/*.test.tsx'],
      plugins: ['vitest'],
      extends: [
        'plugin:testing-library/react',
        'plugin:vitest/recommended',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'vitest/expect-expect': [
          'error',
          {
            customExpressions: [
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
