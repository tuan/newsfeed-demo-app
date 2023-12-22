import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";

export type Props = {
  poster: PosterBylineFragment$key;
};

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    name
    profilePicture {
      ...ImageFragment_image
    }
  }
`;

export default function PosterByline({
  poster,
}: Props): React.ReactElement | null {
  const data = useFragment(PosterBylineFragment, poster);

  return (
    <div className="byline">
      {data.profilePicture && (
        <Image
          image={data.profilePicture}
          width={60}
          height={60}
          className="byline__image"
        />
      )}
      <div className="byline__name">{data.name}</div>
    </div>
  );
}
