![made-with-python](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

<div align="center" >
<h1>
NextJS Starter Template with Passwordless Auth
</h1>
  <a href="https://github.com/trpc/trpc/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/trpc/trpc" />
  </a>
  <a href="https://twitter.com/lohxt">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40lohxt&style=social&url=https%3A%2F%2Ftwitter.com%2Flohxt" />
  </a>
<p align="center" style="font-weight:400;font-size:20px;">
  A barebones NextJS, Tailwind, Prisma starter template which uses email-links for paswordless auth.
</p>
</div>

## Tech Stack

- [Next.js](https://nextjs.org/) – `framework`
- [Typescript](https://www.typescriptlang.org/) – `language`
- [Tailwind](https://tailwindcss.com/) – `CSS`
- [Prisma](https://prisma.io/) – `ORM`
- [Postgresql](https://railway.app/) – `database`
- [NextAuth.js](https://next-auth.js.org/) – `auth`
- [Vercel](https://vercel.com/) – `hosting`

## Running the code locally

To run the code locally, open _Terminal_ in your `projects` folder and take the steps:

```bash
# STEP 1: Get sources from GitHub
$ git clone https://github.com/lohxt1/next-starter.git
$ cd next-starter

# STEP 2: Install the requirements
$ npm install

# STEP 3: Setting up Prisma

# Modify the schema if required and validate it by running
$ npx prisma validate

# Generate Prisma client
$ npx prisma generate

# Push the schema changes
# make sure you have the right DATABASE_URL in .env file
$ npx prisma db push

# STEP 4: Running the app in dev mode
$ npm run dev
```
