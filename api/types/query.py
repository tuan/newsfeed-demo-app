import strawberry

from api.types.story import Story
from db import db


@strawberry.type
class Query:
    @strawberry.field
    def top_story(self) -> Story | None:
        first = next(node for node in db.nodes if node.get("__typename") == "Story")
        if not first:
            return None

        return Story(first)
