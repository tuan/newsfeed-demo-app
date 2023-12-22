import strawberry

from strawberry.relay import NodeID

from db.types import JsonNode


@strawberry.type
class Location:
    id: NodeID[str]
    name: str

    @staticmethod
    def from_raw_data(data: JsonNode | None) -> "Location | None":
        return (
            Location(id=str(data.get("id")), name=str(data.get("name")))
            if data
            else None
        )
