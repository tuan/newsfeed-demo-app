import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import { useFragment, useQueryLoader } from "react-relay";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";
import { useRef } from "react";
import Hovercard from "./Hovercard";
import PosterDetailsHovercardContents, {
  PosterDetailsHovercardContentsQuery,
} from "./PosterDetailsHovercardContents";
import type { PosterDetailsHovercardContentsQuery as QueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";

export type Props = {
  poster: PosterBylineFragment$key;
};

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
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
  const hoverRef = useRef<HTMLDivElement>(null);
  const [queryRef, loadQuery] = useQueryLoader<QueryType>(
    PosterDetailsHovercardContentsQuery
  );

  function onBeginHover() {
    loadQuery({ posterId: data.id });
  }

  return (
    <div ref={hoverRef} className="byline">
      {data.profilePicture && (
        <Image
          image={data.profilePicture}
          width={60}
          height={60}
          className="byline__image"
        />
      )}
      <div className="byline__name">{data.name}</div>
      <Hovercard targetRef={hoverRef} onBeginHover={onBeginHover}>
        <PosterDetailsHovercardContents queryRef={queryRef!} />
      </Hovercard>
    </div>
  );
}
