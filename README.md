# NOTE APP (graphql)

This is an todo app created as an exercise, using these techs:

- NextJs
- GraphQL
- Tailwind + DaisyUI

## Starting up
to start, create `.env` file in the root directory, with the content you found [here](https://notepad.link/share/wzfERnQ3NUIRHK3lp9lh)

Or, just create a new mysql database, and setup `.env` file as:
```
# change password, user, host, and db below to fit your setting
DATABASE_URL="mysql://password:user@host/db"
```

In case you created a new mysql database, run `prisma migrate`
```
npx prisma migrate dev --name init
```

In case of PlanetScale, use 
```
npx prisma db push
```

After that:
```
pnpm i && pnpm dev
```

and go to [http://localhost:3000](http://localhost:3000).

cheers, [https://jujiyangasli.com](jujiyangasli.com)
