import logging
from api.types.actor import Actor
from api.types.organization import Organization
from api.types.person import Person
from db.types import JsonNode

logger = logging.getLogger(__name__)


def convert_to_actor(raw_data: JsonNode) -> Actor:
    type_name = raw_data.get("__typename")

    match type_name:
        case "Person":
            return Person(raw_data)
        case "Organization":
            return Organization(raw_data)
        case _:
            message = f"Unknown Actor type {type_name}"
            logger.warn(message)
            raise Exception(message)
