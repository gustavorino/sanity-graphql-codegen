import { ProjectListingFragment, getSdk } from "../../generated";
import { GraphQLClient } from "graphql-request";

const sdk = getSdk(
  new GraphQLClient(
    `https://a395zzsr.api.sanity.io/v2023-08-01/graphql/production/default`
  )
);

function fetch(q: string) {
  return null;
}

export default async function Page() {
  const ids = fetch(`*[_type=='project' && ['post'] in tags] {
        _id
    }`);

  const data = await sdk.AllProjects();

  const foo = await sdk.ProjectByIds({ ids: ids });

  return (
    <div>
      {data.allProject.map((project) => {
        return <MyComponent key={project._id} project={project} />;
      })}
    </div>
  );
}

function MyComponent({ project }: { project: ProjectListingFragment }) {
  return (
    <div key={project._id}>
      <div>{project.title?.pt}</div>
      <div>{project.description?.pt}</div>
      <div>{project.slug?.pt?.current}</div>
    </div>
  );
}
