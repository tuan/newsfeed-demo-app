import strawberry
from api.types.actor import Actor
from api.types.image import Image

from strawberry.relay import Node, NodeID
from api.types.organization import Organization
from api.types.person import Person
from db import db

from db.types import JsonNode

import logging

logger = logging.getLogger(__name__)


@strawberry.type
class Story(Node):
    actor_id: NodeID[str]

    _data: strawberry.Private[JsonNode]

    def __init__(self, data: JsonNode):
        self._data = data
        self.actor_id = data.get("id", "")

    @strawberry.field
    def created_at(self) -> str:
        return self._data.get("createdAt", "")

    @strawberry.field
    def title(self) -> str:
        return self._data.get("title", "")

    @strawberry.field
    def summary(self) -> str:
        return self._data.get("summary", "")

    @strawberry.field
    def updated_at(self) -> str:
        return self._data.get("updatedAt", "")

    @strawberry.field
    def attachments(self) -> list[Image]:
        results = (
            Image.from_raw_data(attachment)
            for attachment in self._data.get("attachments", [])
        )
        return [result for result in results if result is not None]

    @strawberry.field
    def thumbnail(self) -> Image | None:
        return Image.from_raw_data(self._data.get("thumbnail"))

    @strawberry.field
    def like_count(self) -> int | None:
        count = self._data.get("likeCount")
        return int(count) if count is not None else None

    @strawberry.field
    def does_viewer_like(self) -> bool | None:
        return bool(self._data.get("doesViewerLike"))

    @strawberry.field
    def poster(self) -> Actor:
        authorId = self._data.get("authorID")
        raw_data = next(node for node in db.nodes if node.get("id") == authorId)
        type_name = raw_data.get("__typename")

        match type_name:
            case "Person":
                return Person(raw_data)
            case "Organization":
                return Organization(raw_data)
            case _:
                message = f"Unknown Actor type {type_name}"
                logger.warn(message)
                raise Exception(message)
