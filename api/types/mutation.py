import strawberry
from api.types.like_story_mutation_response import LikeStoryMutationResponse
from api.types.story import Story
from strawberry import relay

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
