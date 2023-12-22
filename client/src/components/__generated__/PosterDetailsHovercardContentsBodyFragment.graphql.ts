/**
 * @generated SignedSource<<bd89eb7af3afb3234ebad6fb914669cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type OrganizationKind = "COMMERCIAL" | "GOVERNMENT" | "JOURNALISTIC" | "NONPROFIT" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsBodyFragment$data = {
  readonly id: any;
  readonly joined: string | null | undefined;
  readonly location?: {
    readonly name: string;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly organizationKind?: OrganizationKind | null | undefined;
  readonly profilePicture: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment_image">;
  } | null | undefined;
  readonly " $fragmentType": "PosterDetailsHovercardContentsBodyFragment";
};
export type PosterDetailsHovercardContentsBodyFragment$key = {
  readonly " $data"?: PosterDetailsHovercardContentsBodyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsBodyFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterDetailsHovercardContentsBodyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "joined",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageFragment_image"
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "organizationKind",
          "storageKey": null
        }
      ],
      "type": "Organization",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Person",
      "abstractKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};
})();

(node as any).hash = "b9e45af641d47e98f507e7b60f23c46a";

export default node;
