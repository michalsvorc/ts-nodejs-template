/* eslint-env node */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    /**
     * Keep last to override other configs
     * @link https://github.com/prettier/eslint-config-prettier
     */
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.cjs', '*.mjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
  rules: {
    'no-console': 'warn',
  },
  root: true,
};
