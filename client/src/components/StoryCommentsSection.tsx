import { graphql } from "relay-runtime";
import { usePaginationFragment } from "react-relay";
import type { StoryCommentsSectionFragment$key } from "./__generated__/StoryCommentsSectionFragment.graphql";
import Comment from "./Comment";
import LoadMoreCommentsButton from "./LoadMoreCommentsButton";
import { useTransition } from "react";
import LoadingSpinner from "./LoadingSpinner";

export type Props = {
  story: StoryCommentsSectionFragment$key;
};

const StoryCommentsSectionFragment = graphql`
  fragment StoryCommentsSectionFragment on Story
  @refetchable(queryName: "StoryCommentsSectionPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    comments(after: $cursor, first: $count)
      @connection(key: "StoryCommentsSectionFragment_comments") {
      pageInfo {
        startCursor
      }
      edges {
        node {
          id
          ...CommentFragment
        }
      }
    }
  }
`;

export default function StoryCommentsSection({ story }: Props) {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(
    StoryCommentsSectionFragment,
    story
  );

  const onLoadMore = () =>
    startTransition(() => {
      loadNext(3);
    });

  return (
    <>
      {data.comments.edges.map((edge) => (
        <Comment key={edge.node.id} comment={edge.node} />
      ))}
      {(data.comments.pageInfo as any).hasNextPage && (
        <LoadMoreCommentsButton onClick={onLoadMore} disabled={isPending} />
      )}
      {isPending && <LoadingSpinner />}
    </>
  );
}
