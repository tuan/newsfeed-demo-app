import json
from typing import Any

from newsfeed_proj import settings

fake_json_file = settings.BASE_DIR / "db" / "fake_data.json"

JsonNode = dict[str, Any]

with open(fake_json_file, "r") as data:
    nodes: JsonNode = json.load(data)
