import json
from db.types import JsonNode

from newsfeed_proj import settings

fake_json_file = settings.BASE_DIR / "db" / "fake_data.json"


with open(fake_json_file, "r") as data:
    nodes: list[JsonNode] = json.load(data)
