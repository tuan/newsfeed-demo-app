import strawberry

from db.types import JsonNode


@strawberry.type
class Image:
    _url: strawberry.Private[str]
    _alt_text: strawberry.Private[str | None]

    def __init__(self, data: JsonNode):
        self._url = data.get("url", "")
        self._alt_text = data.get("altText")

    @strawberry.field
    def url(self, width: int | None = None, height: int | None = None) -> str:
        if width is None and height is None:
            return self._url

        config = {"width": width, "height": height}
        params = "&".join(f"{k}={v}" for k, v in config.items() if v is not None)
        return f"{self._url}?{params}"
