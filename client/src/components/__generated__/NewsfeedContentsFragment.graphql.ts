/**
 * @generated SignedSource<<c2f84b01d2e1a0faef15da9b37bae162>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedContentsFragment$data = {
  readonly viewer: {
    readonly newsfeedStories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: any;
          readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
        };
      }>;
    };
  };
  readonly " $fragmentType": "NewsfeedContentsFragment";
};
export type NewsfeedContentsFragment$key = {
  readonly " $data"?: NewsfeedContentsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewsfeedContentsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewsfeedContentsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Viewer",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 3
            }
          ],
          "concreteType": "StoryConnection",
          "kind": "LinkedField",
          "name": "newsfeedStories",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "StoryEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Story",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "StoryFragment"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "newsfeedStories(first:3)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "c96e51c8b21f5d0f72d815b65cafcf52";

export default node;
