import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ImageFragment_image$key } from "./__generated__/ImageFragment_image.graphql";

type Props = {
  image: ImageFragment_image$key;
  width?: number;
  height?: number;
  className?: string;
};

const ImageFragment = graphql`
  fragment ImageFragment_image on Image {
    url
  }
`;

export default function Image({
  image,
  width,
  height,
  className,
}: Props): React.ReactElement {
  const data = useFragment(ImageFragment, image);

  return (
    <img
      key={data.url}
      src={data.url}
      width={width}
      height={height}
      className={className}
    />
  );
}
