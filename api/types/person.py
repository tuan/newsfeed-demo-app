import strawberry
from api.types.actor import Actor

from api.types.location import Location


@strawberry.type
class Person(Actor):
    email: str | None
    location: Location | None
