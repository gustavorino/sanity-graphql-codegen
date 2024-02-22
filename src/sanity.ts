import { createClient } from "next-sanity";
import { getSdk } from "./graphql-generated";
import { GraphQLClient } from "graphql-request";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const graphqlClient = getSdk(
  new GraphQLClient(
    `https://${projectId}.api.sanity.io/${apiVersion}/graphql/${dataset}/default`
  )
);

export const imageBuilder = imageUrlBuilder(client);
