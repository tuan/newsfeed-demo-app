from enum import Enum
import strawberry


@strawberry.enum
class OrganizationKind(Enum):
    COMMERCIAL = "COMMERCIAL"
    NONPROFIT = "NONPROFIT"
    GOVERNMENT = "GOVERNMENT"
    JOURNALISTIC = "JOURNALISTIC"
