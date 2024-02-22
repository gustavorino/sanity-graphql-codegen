# Features

A Next.js project with Sanity and GraphQL setup.

- GraphQL code generation with Typescript integration.
- VSCode auto-complete for GraphQL queries.
- Embedded studio on /studio route.

## Getting Started

### 1 - create a .env file on the root folder.

```
#.env
NEXT_PUBLIC_SANITY_PROJECT_ID=projectId
NEXT_PUBLIC_SANITY_DATASET=production
```

### 2 - Deploy GraphQL api

`npm run graphql-deploy`

### 3 - Start the development server:

```bash
npm run dev
```

### 4 - Add some content:

Open [http://localhost:3000/studio](http://localhost:3000/studio) and publish a few blog posts.

### 5 - See the result

Open [http://localhost:3000](http://localhost:3000)

### Notes

All the queries are being placed on the `queries.graphql` file. If you prefer to use tags on typescript files, you will have to edit `graphql.config.ts` and `codegen.ts`.

### Need some help?

Look for <i>Gustavo Bremm</i> on [Sanity Slack](https://slack.sanity.io/).
