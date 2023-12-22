import * as React from "react";
import Image from "./Image";

export type Props = {
  poster: {
    name: string | null | undefined;
    profilePicture:
      | {
          url: string;
        }
      | null
      | undefined;
  };
};

export default function PosterByline({
  poster,
}: Props): React.ReactElement | null {
  if (poster == null) {
    return null;
  }
  return (
    <div className="byline">
      {poster.profilePicture && (
        <Image
          image={poster.profilePicture}
          width={60}
          height={60}
          className="byline__image"
        />
      )}
      <div className="byline__name">{poster.name}</div>
    </div>
  );
}
