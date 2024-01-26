# Crypto-React-SPA: frontend demo for simple crypto tracking app

Small application that showcases the usage of a crypto api in a modern feeling fintech application

## Getting Started

### ⚡️ Prerequisites:

- Node.js (18+)
- pnpm (package manager)
- #### Preferable
  - this was built on `windows` using `vscode` as the IDE.

_other `OS` and other `IDEs` haven't been properly tested_

### Installation:

#### 1.Clone the repo:

```bash
$ git clone git@github.com:IrvingArmenta/crypto-react-spa.git
```

#### 2.Install dependencies:

```bash
$ pnpm install
```

### ⚡️ Development:

#### 1.Start the development server:

```bash
$ pnpm dev
```

This will start both the `LOCAL_API` and `VITE` service using `concurrently`

#### 2.Access the app in your browser: http://localhost:5173/

##### express server will start running in port: 3001

**---IMPORTANT---**

You need an api key from Gecko Coin to access the api locally -> [CoinGecko API - Getting Started](https://apiguide.coingecko.com/getting-started/getting-started)

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
  - Chose SWR for it's multiple features regarding the auto fetch of stale data and the updates it automatically handles
  - I have used custom hooks before, named like `useFetch()` that handles loading states and such, but `swr` it's a much more robust solution.
  - I have used it before and is a product from Vercel which is a company I follow and trust
- wouter: https://github.com/molefrog/wouter
  - Chose Wouter because of it's minimum size `1.5kb` , I am more experienced with `react-router 6` but I just needed a simple way to render the navigation
  - it is true that this wasn't necessary as I could just found a more simplier method `(like using state in App.tsx)`, but wanted to implement Wouter for possible expansion of routes
- ApexCharts: https://github.com/apexcharts
  - First time using Apexcharts, the series data structure is well explained and seemed to fit my needs.
  - Tried using `ant design` graphs, but the documents and the actual components do not match at all, therefore, it was really a time investment testing
  - Looked into google charts (candlesticks) but they're not very good looking (they look stale) and it seems they're not built for responsive design
  - I don't think there is any issue other than it still depends on Class Based Components.
- pandaCSS: https://panda-css.com/
  - A "modern" CSS-IN-JS solution, I have used `stitches` before and I like the "security" it provides with SSR styles, I enjoy working with typescript autocompletion and other many helping functions that control how styles are rendered, it also generate css in a modern way by using `@layer` as it's anchor point in the app
  - I have more experience using `styled-components` but I'd like to distant myself from it, seems it lacks more modern features out of the box (ssr for example) also it seems the teams I have worked for do not understand or follow a weird way of using it, it has caused some bad impact on me.
  - Have also used just simple `SCSS modules` and `CSS modules` with `PostCSS` and also the old school way of just using css files directly imported, I have experience also using `LESS`, and other pre-processors
  - I feel interest in using `open-props` and modules in the future, but in an effective way.

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
- majestic: https://www.npmjs.com/package/majestic
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

- Test & docs: **12 hours**
  - Implementation and fixes for Jest environment
  - unit testing to ~almost~ 100 coverage
  - comment and docs writing

Around a total of: `42 hours`
