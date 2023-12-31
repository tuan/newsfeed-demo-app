from typing import Iterable, Sequence
import strawberry
from strawberry import relay
from api.types.actor import Actor
from api.types.person import Person
from api.types.story import Story
from api.utils.actor import convert_to_actor

from db import db


@strawberry.type
class Viewer:
    @strawberry.field
    def actor(self) -> Actor:
        data = next(
            node
            for node in db.nodes
            if node["__typename"] == "Person" and node.get("id") == "the-viewer"
        )

        return convert_to_actor(data)

    @strawberry.field
    def contacts(self, search: str | None = None) -> Sequence[Actor]:
        return [
            Person(node)
            for node in db.nodes
            if node["__typename"] == "Person"
            and node["id"] != "the-viewer"
            and (search.lower() in node["name"].lower() if search is not None else True)
        ]

    @relay.connection(relay.ListConnection[Story])
    def newsfeed_stories(self) -> Iterable[Story]:
        return (Story(node) for node in db.nodes if node["__typename"] == "Story")
