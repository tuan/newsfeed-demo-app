from typing import Iterable
import strawberry
from api.types.actor import Actor
from api.types.image import Image

from strawberry.relay import Node, NodeID
from strawberry.types import Info
from api.utils.actor import convert_to_actor
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
            Image(attachment) for attachment in self._data.get("attachments", [])
        )
        return [result for result in results if result is not None]

    @strawberry.field
    def thumbnail(self) -> Image | None:
        image = self._data.get("thumbnail")
        return Image(image) if image is not None else None

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
        return convert_to_actor(raw_data)

    @classmethod
    def resolve_nodes(
        cls,
        *,
        info: Info,
        node_ids: Iterable[str],
        required: bool = False,
    ):
        return [
            Story(node)
            for node in db.nodes
            if node.get("__typename") == "Story" and str(node.get("id")) in node_ids
        ]
