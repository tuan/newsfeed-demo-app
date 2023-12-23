/**
 * @generated SignedSource<<80848c7c3ff77db3c28d1572aab6ed7d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type StoryCommentsComposerPostMutation$variables = {
  connections: ReadonlyArray<string>;
  id: string;
  text: string;
};
export type StoryCommentsComposerPostMutation$data = {
  readonly postStoryComment: {
    readonly commentEdge: {
      readonly node: {
        readonly id: any;
        readonly text: string | null | undefined;
      };
    };
  };
};
export type StoryCommentsComposerPostMutation = {
  response: StoryCommentsComposerPostMutation$data;
  variables: StoryCommentsComposerPostMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "text"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "text",
    "variableName": "text"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "CommentEdge",
  "kind": "LinkedField",
  "name": "commentEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoryCommentsComposerPostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "StoryCommentMutationResponse",
        "kind": "LinkedField",
        "name": "postStoryComment",
        "plural": false,
        "selections": [
          (v4/*: any*/)
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
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "StoryCommentsComposerPostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "StoryCommentMutationResponse",
        "kind": "LinkedField",
        "name": "postStoryComment",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "commentEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9e22a1e98c792c40b3873e2331e4ebe9",
    "id": null,
    "metadata": {},
    "name": "StoryCommentsComposerPostMutation",
    "operationKind": "mutation",
    "text": "mutation StoryCommentsComposerPostMutation(\n  $id: String!\n  $text: String!\n) {\n  postStoryComment(id: $id, text: $text) {\n    commentEdge {\n      node {\n        id\n        text\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5c5e3ff8c37c1c20eb267bca2d29fe4f";

export default node;
