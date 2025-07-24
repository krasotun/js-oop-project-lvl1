import importPlugin from 'eslint-plugin-import';

export default {
  plugins: {
    import: importPlugin,
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'import/prefer-default-export': ['error'],
  },
};

  
