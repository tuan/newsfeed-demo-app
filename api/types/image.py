import strawberry

from db.types import JsonNode


@strawberry.type
class Image:
    alt_text: str | None = None
    url: str

    @staticmethod
    def from_raw_data(data: JsonNode | None) -> "Image | None":
        return (
            Image(url=str(data.get("url")), alt_text=data.get("altText"))
            if data
            else None
        )
