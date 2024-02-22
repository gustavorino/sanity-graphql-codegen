import type { CodegenConfig } from "@graphql-codegen/cli";
import graphqlConfig from "./graphql.config.js";

const config: CodegenConfig = {
  generates: {
    ["src/graphql-generated.ts"]: {
      documents: graphqlConfig.documents,
      schema: graphqlConfig.schema,
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
