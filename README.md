# NOTE APP (graphql)

This is an todo app created as an exercise, using these techs:

- NextJs
- GraphQL
- Tailwind + DaisyUI
- PlanetScale MySQL

## Starting up
first, install dependencies:
```bash
pnpm i
```


to start, create `.env` file in the root directory.
You will need to add `DATABASE_URL` to the file:
```bash
# change user, password, host, and db below to fit your setting
# maybe, add connection setting as well: ?sslaccept=strict
DATABASE_URL="mysql://user:password@host/db"
```
This example uses MySQL.

## Setting up db
In case you created a new mysql database, run prisma migrate:
```bash
npx prisma migrate dev --name init
```


In case of [PlanetScale](https://planetscale.com/), use:
```bash
npx prisma db push
```

## Starting (dev)
After that, start the dev server:
```bash
pnpm dev
```

and go to [http://localhost:3000](http://localhost:3000).

## Live version

Live version is available at:

[https://endearing-platypus-e762b8.netlify.app](https://endearing-platypus-e762b8.netlify.app)

Make sure i know when you are accessing live version, because the db might need to be wwoken up.

cheers, [https://jujiyangasli.com](jujiyangasli.com)
