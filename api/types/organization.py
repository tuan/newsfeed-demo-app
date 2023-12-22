import strawberry

from api.types.actor import Actor
from api.types.organization_kind import OrganizationKind
from db.types import JsonNode


@strawberry.type
class Organization(Actor):
    def __init__(self, data: JsonNode):
        super().__init__(data=data)

    @strawberry.field
    def organization_kind(self) -> OrganizationKind | None:
        kind = self._data.get("organizationKind", OrganizationKind)
        return OrganizationKind[kind] if kind is not None else None
