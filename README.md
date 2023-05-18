# NOTE APP (graphql)

This is an todo app created as an exercise, using these techs:

- NextJs
- GraphQL
- Tailwind + DaisyUI

## Starting up
first, install dependencies:
```
pnpm i
```


to start, create `.env` file in the root directory.
You will need to add `DATABASE_URL` to te file:
```
# change password, user, host, and db below to fit your setting
DATABASE_URL="mysql://password:user@host/db"
```

## Setting up db
In case you created a new mysql database, run `prisma migrate`
```
npx prisma migrate dev --name init
```

In case of PlanetScale, use 
```
npx prisma db push
```

## Starting (dev)
After that:
```
pnpm dev
```

and go to [http://localhost:3000](http://localhost:3000).

cheers, [https://jujiyangasli.com](jujiyangasli.com)
