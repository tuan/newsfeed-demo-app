from typing import Iterable
import strawberry
from api.types.actor import Actor

from api.types.location import Location
from db import db
from db.types import JsonNode


@strawberry.type
class Person(Actor):
    def __init__(self, data: JsonNode):
        super().__init__(data=data)

    @strawberry.field
    def email(self) -> str | None:
        return self._data.get("email")

    @strawberry.field
    def location(self) -> Location | None:
        return Location.from_raw_data(self._data.get("location"))

    @classmethod
    def resolve_nodes(
        cls,
        *,
        info,
        node_ids: Iterable[str],
        required: bool = False,
    ):
        return [
            Person(node)
            for node in db.nodes
            if node.get("__typename") == "Person" and str(node.get("id")) in node_ids
        ]
