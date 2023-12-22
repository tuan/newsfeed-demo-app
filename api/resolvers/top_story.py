from api.resolvers import actor
from api.types.category import Category
from api.types.image import Image
from api.types.story import Story

from db import db


def resolve() -> Story | None:
    first = next(node for node in db.nodes if node.get("__typename") == "Story")
    if not first:
        return None

    return Story(
        id=str(first.get("id")),
        created_at=first.get("createdAt", ""),
        title=first.get("title", ""),
        summary=first.get("summary", ""),
        updated_at=first.get("updated_at", ""),
        like_count=first.get("like_count", ""),
        does_viewer_like=first.get("does_viewer_like", ""),
        category=Category[str(first.get("category"))],
        attachments=[
            Image.from_raw_data(attachment)
            for attachment in first.get("attachments", [])
        ],
        thumbnail=Image.from_raw_data(first.get("thumbnail")),
        poster=actor.resolve(str(first.get("authorID"))),
    )
