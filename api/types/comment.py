from itertools import chain
from typing import Iterable
import strawberry

from strawberry.relay import Node, NodeID

from db import db
from db.types import JsonNode


@strawberry.type
class Comment(Node):
    _comment_id: NodeID[str]

    _text: strawberry.Private[str | None]

    def __init__(self, data: JsonNode):
        self._comment_id = data.get("id", "")
        self._text = data.get("text")

    @strawberry.field
    def text(self) -> str | None:
        return self._text

    @classmethod
    def resolve_nodes(
        cls,
        *,
        info,
        node_ids: Iterable[str],
        required: bool = False,
    ):
        stories = (node for node in db.nodes if node["__typename"] == "Story")
        comments = chain(*(story.get("comments", []) for story in stories))
        return (
            Comment(comment) for comment in comments if comment.get("id") in node_ids
        )
