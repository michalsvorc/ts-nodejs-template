# TypeScript Node.js template

Overview:

- Language: [TypeScript](https://www.typescriptlang.org)
- Module format: [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#file-esm-package-md)
- Node.js engine: [vite-node](https://github.com/vitest-dev/vitest/tree/main/packages/vite-node)
- Package manager: [pnpm](https://pnpm.io)
  - [Installation](https://pnpm.io/installation)
- Linting: [ESLint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)
- Testing: [Vitest](https://vitest.dev)

Inspired by [Vitest repository](https://github.com/vitest-dev/vitest).

## Content

- [Usage](#usage)
- [Development](#development)
- [Guidelines](#guidelines)

## Usage

```javascript
import result from 'ts-nodejs-template';
```

## Development

Run repository bootstrap command:

```shell
pnpm run boot
```

Install dependencies:

```shell
pnpm install
```

Start development server:

```shell
pnpm run dev
```

Run tests:

```shell
pnpm run test
```

## Guidelines

- [TypeScript style guide](https://google.github.io/styleguide/tsguide.html)
- [Conventional commits](https://github.com/conventional-changelog/commitlint#what-is-commitlint)
- [Conventional releases](https://github.com/conventional-changelog/standard-version)
