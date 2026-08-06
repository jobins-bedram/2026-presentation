#!/bin/sh
# Export the deck to PPTX: rasterize the exported PDF, one full-bleed image per slide.
# Requires my-journey-se-to-ai.pdf (run `npm run export-pdf` first if missing/stale).
set -e

PDF=my-journey-se-to-ai.pdf
OUT=my-journey-se-to-ai.pptx

[ -f "$PDF" ] || { echo "ERROR: $PDF not found — run 'npm run export-pdf' first" >&2; exit 1; }

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

pdftoppm -png -r 150 "$PDF" "$TMP/slide"
node scripts/make-pptx.mjs "$TMP" "$OUT"
