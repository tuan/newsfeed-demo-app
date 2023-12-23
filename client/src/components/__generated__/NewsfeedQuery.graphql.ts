/**
 * @generated SignedSource<<d46f287bea554798b7a457298c3438d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedQuery$variables = Record<PropertyKey, never>;
export type NewsfeedQuery$data = {
  readonly topStories: ReadonlyArray<{
    readonly id: any;
    readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
  }>;
};
export type NewsfeedQuery = {
  response: NewsfeedQuery$data;
  variables: NewsfeedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewsfeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "topStories",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "StoryFragment"
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NewsfeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "topStories",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "poster",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isActor"
              },
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "CommentConnection",
            "kind": "LinkedField",
            "name": "comments",
            "plural": false,
            "selections": [
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
                    "name": "startCursor",
                    "storageKey": null
                  },
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CommentEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "text",
                        "storageKey": null
                      },
                      (v1/*: any*/)
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
              }
            ],
            "storageKey": "comments(first:3)"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "StoryCommentsSectionFragment_comments",
            "kind": "LinkedHandle",
            "name": "comments"
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "391bf85d8c3fd4d40d22fc6af512e971",
    "id": null,
    "metadata": {},
    "name": "NewsfeedQuery",
    "operationKind": "query",
    "text": "query NewsfeedQuery {\n  topStories {\n    ...StoryFragment\n    id\n  }\n}\n\nfragment CommentFragment on Comment {\n  text\n}\n\nfragment ImageFragment_image on Image {\n  url\n}\n\nfragment PosterBylineFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  profilePicture {\n    ...ImageFragment_image\n  }\n}\n\nfragment StoryCommentsSectionFragment on Story {\n  comments(first: 3) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        ...CommentFragment\n        __typename\n      }\n      cursor\n    }\n  }\n  id\n}\n\nfragment StoryFragment on Story {\n  title\n  summary\n  createdAt\n  poster {\n    __typename\n    ...PosterBylineFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  thumbnail {\n    ...ImageFragment_image\n  }\n  ...StoryCommentsSectionFragment\n}\n"
  }
};
})();

(node as any).hash = "8b7066152430c34c48fe224a7f40dd33";

export default node;
