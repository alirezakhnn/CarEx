# Turborepo starter

This is an official npm starter turborepo.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs` 📖: a [Next.js](https://nextjs.org/) app
- `web` 🌐: another [Next.js](https://nextjs.org/) app
- `ui` ✨: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To 🚀 build all apps and packages, run the following command:

```bash
cd my-turborepo
npm run build
```

### Develop

📦 Use this command to build all apps and packages in the TurboRepo:

```bash

Copy code
cd my-turborepo
npm run dev
```

#### Run Individual Workspace

```bash

npm run dev --workspace=$WORKSPACE
```

### Remote Caching

🔁 Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching, you will need an account with Vercel. If you don't have an account, you can [create one](https://vercel.com/signup), then enter the following commands:

```bash

cd my-turborepo
npx turbo login
```



This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

npx turbo link

Plain Text
Copy code

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)📝
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)📥
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)🌐
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)🔍
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)⚙️
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)🛠️


# About CarEx 🚗

🎉 CarEx is a project aimed at introducing cars to the world! 🚗 Start your engines and explore the exciting world of automobiles with CarEx!


CAREX is a project 🎉 aimed at introducing cars to the world🌍! 🚗 Start your engines and explore the exciting world of automobiles with CarEx ✨! 

## What is CarEx for? 🤔

CAREX stands for Car Experience, and it is an educational platform that provides information about cars, their history, and their impact on society. 📚🚀

CAREX also offers a variety of resources for car enthusiasts, including articles, videos, and quizzes. 📖🎥🔍

So buckle up and get ready to dive into the amazing world of cars with CAREX! 🌟🏁🚀