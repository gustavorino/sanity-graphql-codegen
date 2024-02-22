# Features

This is a Next.js project with Sanity and 100% GraphQL setup.

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

### 2 - Run on the terminal

`npm run graphql-deploy`

### 3 - Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4 - Add some content:

Open [http://localhost:3000/studio](http://localhost:3000/studio) and publish a few blog posts.

### 5 - See the result

Open [http://localhost:3000](http://localhost:3000)
