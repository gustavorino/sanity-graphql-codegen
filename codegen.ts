import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    ["src/generated.ts"]: {
      documents: "*/**/queries.graphql",
      schema: `https://a395zzsr.api.sanity.io/v2023-08-01/graphql/production/default`,
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        nonOptionalTypename: true,
        rawRequest: false,
      },
    },
  },
};

export default config;
