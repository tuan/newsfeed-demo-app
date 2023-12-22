from strawberry.relay import NodeID

from api.types.actor import Actor
from api.types.image import Image
from api.types.location import Location
from api.types.organization import Organization
from api.types.organization_kind import OrganizationKind
from api.types.person import Person
from db import db


def resolve(id: NodeID[str]) -> Actor:
    raw_data = next(node for node in db.nodes if node.get("id") == id)
    type_name = raw_data.get("__typename")

    name = raw_data.get("name")
    profile_picture = Image.from_raw_data(raw_data.get("profilePicture"))
    joined = raw_data.get("joined")

    match type_name:
        case "Person":
            return Person(
                id=id,
                name=name,
                profile_picture=profile_picture,
                joined=joined,
                email=raw_data.get("email"),
                location=Location.from_raw_data(raw_data.get("location")),
            )
        case "Organization":
            return Organization(
                id=id,
                name=name,
                profile_picture=profile_picture,
                joined=joined,
                organization_kind=OrganizationKind[
                    str(raw_data.get("organizationKind"))
                ],
            )
        case _:
            raise Exception(f"Unknown Actor type {type_name}")
