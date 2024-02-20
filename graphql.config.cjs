/* eslint-disable no-undef */

/** @type {import('graphql-config').IGraphQLConfig} */
const config = {
  projects: {
    sanity: {
      schema: `https://a395zzsr.api.sanity.io/v2023-08-01/graphql/production/default`,
      documents: ["*/**/queries.graphql"], // the */** is required because the vscode plugin doens't work well with monorepos. */
    },
  },
};

module.exports = config;
