/**
 * @generated SignedSource<<9003f5c88fe623a744123e104b74962b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableFragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryLikeButton_updatable$data = {
  doesViewerLike: boolean | null | undefined;
  likeCount: number | null | undefined;
  readonly " $fragmentType": "StoryLikeButton_updatable";
};
export type StoryLikeButton_updatable$key = {
  readonly " $data"?: StoryLikeButton_updatable$data;
  readonly $updatableFragmentSpreads: FragmentRefs<"StoryLikeButton_updatable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryLikeButton_updatable",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likeCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doesViewerLike",
      "storageKey": null
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "cfd028ee71e7f66d6ad4172b7b1abd0e";

export default node;
