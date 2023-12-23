import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import Story from "./Story";

import { graphql } from "relay-runtime";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import { NewsfeedContentsFragment$key } from "./__generated__/NewsfeedContentsFragment.graphql";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery") {
    viewer {
      newsfeedStories(after: $cursor, first: $count)
        @connection(key: "NewsfeedContentsFragment_newsfeedStories") {
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
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    NewsfeedQueryType,
    NewsfeedContentsFragment$key
  >(NewsfeedContentsFragment, queryData);

  function onEndReached() {
    loadNext(3);
  }

  const edges = data.viewer.newsfeedStories.edges;

  return (
    <div className="newsfeed">
      {edges.map((edge) => (
        <Story key={edge.node.id} story={edge.node} />
      ))}
      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </div>
  );
}
