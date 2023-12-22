import strawberry
from strawberry.relay import NodeID

from api.types.image import Image


@strawberry.interface
class Actor:
    id: NodeID[str]
    name: str | None
    profile_picture: Image | None
    joined: str | None
