/**
 * @generated SignedSource<<7bec37fe99d42cf207312db4308a0de4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageFragment_image$data = {
  readonly url: string;
  readonly " $fragmentType": "ImageFragment_image";
};
export type ImageFragment_image$key = {
  readonly " $data"?: ImageFragment_image$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageFragment_image">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageFragment_image",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": null
};

(node as any).hash = "8bc856a8f3c10d70e3e3fa66a2e7f391";

export default node;
