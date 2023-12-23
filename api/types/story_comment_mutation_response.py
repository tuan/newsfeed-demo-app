import strawberry

from strawberry import relay
from api.types.comment import Comment
from api.types.story import Story


@strawberry.type
class StoryCommentMutationResponse:
    story: Story
    commentEdge: relay.Edge[Comment]
