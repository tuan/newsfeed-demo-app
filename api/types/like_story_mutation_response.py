import strawberry

from api.types.story import Story


@strawberry.type
class LikeStoryMutationResponse:
    story: Story
