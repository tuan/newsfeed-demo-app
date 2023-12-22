import strawberry
from api.types.actor import Actor

from api.types.location import Location
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
