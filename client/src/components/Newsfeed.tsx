import { useFragment, useLazyLoadQuery } from "react-relay";
import Story from "./Story";

import { graphql } from "relay-runtime";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import { NewsfeedContentsFragment$key } from "./__generated__/NewsfeedContentsFragment.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query {
    viewer {
      newsfeedStories(first: 3) {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`;

export default function Newsfeed() {
  const queryData = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const data = useFragment<NewsfeedContentsFragment$key>(
    NewsfeedContentsFragment,
    queryData
  );

  const edges = data.viewer.newsfeedStories.edges;

  return (
    <div className="newsfeed">
      {edges.map((edge) => (
        <Story key={edge.node.id} story={edge.node} />
      ))}
    </div>
  );
}
