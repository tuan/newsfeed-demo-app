from typing import Iterable
import strawberry

from api.types.actor import Actor
from api.types.organization_kind import OrganizationKind
from db import db
from db.types import JsonNode


@strawberry.type
class Organization(Actor):
    def __init__(self, data: JsonNode):
        super().__init__(data=data)

    @strawberry.field
    def organization_kind(self) -> OrganizationKind | None:
        kind = self._data.get("organizationKind", OrganizationKind)
        return OrganizationKind[kind] if kind is not None else None

    @classmethod
    def resolve_nodes(
        cls,
        *,
        info,
        node_ids: Iterable[str],
        required: bool = False,
    ):
        return [
            Organization(node)
            for node in db.nodes
            if node.get("__typename") == "Organization"
            and str(node.get("id")) in node_ids
        ]
