# NOTE APP (graphql)

This is an todo app created as an exercise, using these techs:

- NextJs
- GraphQL
- Tailwind + DaisyUI

## Starting up
first, install dependencies:
```bash
pnpm i
```


to start, create `.env` file in the root directory.
You will need to add `DATABASE_URL` to the file:
```bash
# change password, user, host, and db below to fit your setting
DATABASE_URL="mysql://password:user@host/db"
```

## Setting up db
In case you created a new mysql database, run `prisma migrate`
```bash
npx prisma migrate dev --name init
```

This example uses MySQL.

In case of PlanetScale, use 
```bash
npx prisma db push
```

## Starting (dev)
After that:
```bash
pnpm dev
```

and go to [http://localhost:3000](http://localhost:3000).

cheers, [https://jujiyangasli.com](jujiyangasli.com)
