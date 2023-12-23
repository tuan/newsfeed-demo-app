/**
 * @generated SignedSource<<7d4d3ddb19b5eabae1e019afbe9c97b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryLikeButtonLikeMutation$variables = {
  doesLike: boolean;
  id: string;
};
export type StoryLikeButtonLikeMutation$data = {
  readonly likeStory: {
    readonly story: {
      readonly " $fragmentSpreads": FragmentRefs<"StoryLikeButtonFragment">;
    };
  };
};
export type StoryLikeButtonLikeMutation = {
  response: StoryLikeButtonLikeMutation$data;
  variables: StoryLikeButtonLikeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "doesLike"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "doesLike",
    "variableName": "doesLike"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoryLikeButtonLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "LikeStoryMutationResponse",
        "kind": "LinkedField",
        "name": "likeStory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Story",
            "kind": "LinkedField",
            "name": "story",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "StoryLikeButtonFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "StoryLikeButtonLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "LikeStoryMutationResponse",
        "kind": "LinkedField",
        "name": "likeStory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Story",
            "kind": "LinkedField",
            "name": "story",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "575fc956a60d4e09cbdfa3fd376bf356",
    "id": null,
    "metadata": {},
    "name": "StoryLikeButtonLikeMutation",
    "operationKind": "mutation",
    "text": "mutation StoryLikeButtonLikeMutation(\n  $id: String!\n  $doesLike: Boolean!\n) {\n  likeStory(id: $id, doesLike: $doesLike) {\n    story {\n      ...StoryLikeButtonFragment\n    }\n  }\n}\n\nfragment StoryLikeButtonFragment on Story {\n  id\n  likeCount\n  doesViewerLike\n}\n"
  }
};
})();

(node as any).hash = "bcb42484a96fd5611a93cc6577599c4d";

export default node;
