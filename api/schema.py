import strawberry
from api.types.organization import Organization
from api.types.person import Person

from api.types.story import Story
from api.resolvers import top_story


@strawberry.type
class Query:
    top_story: Story | None = strawberry.field(resolver=top_story.resolve)


schema = strawberry.Schema(
    query=Query,
    # these types implement an interface and do not appear directly in schema
    types=[Person, Organization],
)
