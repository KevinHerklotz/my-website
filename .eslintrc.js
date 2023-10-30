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
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/strict',
    'next/core-web-vitals',
    'plugin:prettier/recommended', // always keep this the last item in the list
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
    'react/require-default-props': 'off',
  },
  overrides: [
    {
      files: ['src/components/ui/**'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**/*.test.ts*'],
      plugins: ['vitest'],
      extends: ['plugin:testing-library/react', 'plugin:vitest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        '@next/next/no-img-element': 'off',
        'react/jsx-props-no-spreading': 'off',
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
