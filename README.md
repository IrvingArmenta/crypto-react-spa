# Crypto-React-SPA: frontend demo for simple crypto tracking app

Small application that showcases the usage of a crypto api in a modern feeling fintech application

## Getting Started

### ⚡️ Prerequisites:

- Node.js (18+)
- pnpm (package manager)

### Installation:

#### 1.Clone the repo:

```bash
$ git clone https://github.com/your-username/crypto-react-spa.git
```

#### 2.Install dependencies:

```bash
$ pnpm install
```

### ⚡️ Development:

#### 1.Start the development server:

```bash
$ pnpm run dev
```

This will start both the `LOCAL_API` and `VITE` service using `concurrently`

#### 2.Access the app in your browser: http://localhost:5173/

##### express server will start running in port: 3001

**IMPORTANT**

- you need an api key from Gecko Coin to access the api locally -> https://www.coingecko.com/

---

## Available Scripts

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the production-ready version.
- `pnpm run lint`: Runs code linting.
- `pnpm run test`: Executes unit and integration tests.
- `pnpm run test:coverage`: Generates a test coverage report. _(it should not be commited)_
- `pnpm run test:ui`: runs and opens a GUI for testing (using `majestic`).

#### `pnpm prepare`

- Sets up Husky for automatic Git hook execution.
- Generates code or utilities related to PandaCSS to enhance the styling workflow.
- These tasks are typically performed once during project setup to ensure a smooth development experience and maintain code quality.

## Technical Stack

### Frontend

- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- SWR: https://swr.vercel.app/
- wouter: https://github.com/molefrog/wouter
- ApexCharts: https://github.com/apexcharts
- pandaCSS: https://panda-css.com/

### Backend (backend for the frontend)

- Express: https://expressjs.com/
- Morgan: https://www.npmjs.com/package/morgan
- Cors: https://expressjs.com/en/resources/middleware/cors.html

### Development (developer experience)

- typeScript: https://www.typescriptlang.org/
- vite: https://vitejs.dev/
- Jest: https://jestjs.io/
- Testing Library: https://testing-library.com/docs/react-testing-library/intro
- ESLint: https://eslint.org/
- Prettier: https://prettier.io/
- Husky: https://github.com/typicode/husky
- Commitlint: https://github.com/conventional-changelog/commitlint

### Other related tools

- concurrently: https://www.npmjs.com/package/concurrently
- tsx: https://www.npmjs.com/package/tsx
- dotenv: https://www.npmjs.com/package/dotenv
- identity-obj-proxy: https://www.npmjs.com/package/identity-obj-proxy

## Implementation time

_please bear in mind that these are approximations_

- Research about crypto: **4 ~ 6 hours**

  - available api's
  - limitations
  - data structures used in crypto apps

- Implementation of first screen: **12 ~ 14 hours**

  - coin-heat api implementation and setup
  - fixing issues with JEST (strange issues)
  - choosing and planning proper usage of tools and tech stack
  - creation of all components in `<Discover />`

- Implementation of second screen: **10 ~ 12 hours**

  - Research for npm packages for charts (candlesticks)
  - Implementation and customization of the page
  - Understanding, creation and implementation for protected API keys

- Test & docs: **9 hours**
  - Implementation and fixes for Jest environment
  - unit testing to ~almost~ 100 coverage
  - comment and docs writing
