import * as React from "react";
import Card from "./Card";
import Heading from "./Heading";
import PosterByline from "./PosterByline";
import StorySummary from "./StorySummary";
import Image from "./Image";
import Timestamp from "./Timestamp";
import { graphql } from "relay-runtime";
import { StoryFragment$key } from "./__generated__/StoryFragment.graphql";
import { useFragment } from "react-relay";

type Props = {
  story: StoryFragment$key;
};

const StoryFragment = graphql`
  fragment StoryFragment on Story {
    title
    summary
    createdAt
    poster {
      ...PosterBylineFragment
    }
    thumbnail {
      ...ImageFragment_image
    }
  }
`;

export default function Story({ story }: Props): React.ReactElement {
  const data = useFragment(StoryFragment, story);

  return (
    <Card>
      {data.poster && <PosterByline poster={data.poster} />}
      <Heading>{data.title}</Heading>
      <Timestamp time={data.createdAt} />
      {data.thumbnail && (
        <Image image={data.thumbnail} width={400} height={400} />
      )}
      {data.summary && <StorySummary summary={data.summary} />}
    </Card>
  );
}
