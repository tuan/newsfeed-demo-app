/**
 * @generated SignedSource<<a8990a8f2ed944dc017346b6e5e0b900>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
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

import NewsfeedContentsRefetchQuery_graphql from './NewsfeedContentsRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "viewer",
  "newsfeedStories"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 3,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": NewsfeedContentsRefetchQuery_graphql
    }
  },
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
          "alias": "newsfeedStories",
          "args": null,
          "concreteType": "StoryConnection",
          "kind": "LinkedField",
          "name": "__NewsfeedContentsFragment_newsfeedStories_connection",
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
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "cursor",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endCursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasNextPage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "557f1fc065cc1380064c363a0a77e477";

export default node;
