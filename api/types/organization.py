import strawberry

from api.types.actor import Actor
from api.types.organization_kind import OrganizationKind


@strawberry.type
class Organization(Actor):
    organization_kind: OrganizationKind | None
