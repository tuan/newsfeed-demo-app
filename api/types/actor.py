import strawberry
from strawberry.relay import Node, NodeID

from api.types.image import Image
from db.types import JsonNode


@strawberry.interface
class Actor(Node):
    actor_id: NodeID[str]

    _data: strawberry.Private[JsonNode]

    def __init__(self, data: JsonNode):
        super().__init__()

        self._data = data
        self.actor_id = data.get("id", "")

    @strawberry.field
    def name(self) -> str | None:
        return self._data.get("name")

    @strawberry.field
    def profile_picture(self) -> Image | None:
        image = self._data.get("profilePicture")
        return Image(image) if image is not None else None

    @strawberry.field
    def joined(self) -> str | None:
        return self._data.get("joined")
