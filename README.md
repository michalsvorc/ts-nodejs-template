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
- Scripting: [Execa](https://github.com/sindresorhus/execa/blob/main/docs/scripts.md)

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

Install dependencies:

```shell
pnpm install
```

Run repository bootstrap command:

```shell
pnpm run boot
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
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)
