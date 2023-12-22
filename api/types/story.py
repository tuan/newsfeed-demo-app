import strawberry
from api.types.actor import Actor
from api.types.category import Category
from api.types.image import Image

from strawberry.relay import NodeID


@strawberry.type
class Story:
    id: NodeID[str]
    created_at: str
    category: Category | None
    title: str
    summary: str | None
    updated_at: str | None
    attachments: list[Image | None] | None
    thumbnail: Image | None
    like_count: int | None
    does_viewer_like: bool | None
    poster: Actor
