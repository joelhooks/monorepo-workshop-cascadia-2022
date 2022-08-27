module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'next/core-web-vitals',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
