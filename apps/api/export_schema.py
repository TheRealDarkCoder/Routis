"""Export the OpenAPI schema to a JSON file for client codegen."""

import json
from pathlib import Path

from main import app

schema = app.openapi()
out = Path(__file__).resolve().parent.parent.parent / "docs" / "schema" / "openapi.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(schema, indent=2) + "\n")
print(f"Schema written to {out}")
