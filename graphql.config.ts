/* eslint-disable no-undef */

import dotenv from "dotenv";
dotenv.config();

const config = {
  schema: `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-01/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`,
  documents: ["*/**/queries.graphql"],
};

export default config;
