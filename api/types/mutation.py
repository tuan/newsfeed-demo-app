import uuid
import strawberry
from api.types.comment import Comment
from api.types.like_story_mutation_response import LikeStoryMutationResponse
from api.types.story import Story
from strawberry import relay
from api.types.story_comment_mutation_response import StoryCommentMutationResponse

from db import db


@strawberry.type
class Mutation:
    @strawberry.mutation
    def like_story(self, id: str, doesLike: bool) -> LikeStoryMutationResponse:
        original_id = relay.GlobalID.from_id(id).node_id
        node = next(node for node in db.nodes if node["id"] == original_id)

        diff = 1 if doesLike else -1
        node["likeCount"] = (node["likeCount"] or 0) + diff
        node["doesViewerLike"] = doesLike

        return LikeStoryMutationResponse(story=Story(node))

    @strawberry.mutation
    def post_story_comment(self, id: str, text: str) -> StoryCommentMutationResponse:
        original_id = relay.GlobalID.from_id(id).node_id
        story_node = next(node for node in db.nodes if node["id"] == original_id)

        comment_id = str(uuid.uuid4())
        comment = Comment({"id": comment_id, "text": text})
        edge = relay.Edge(cursor=comment_id, node=comment)

        return StoryCommentMutationResponse(story=Story(story_node), commentEdge=edge)
