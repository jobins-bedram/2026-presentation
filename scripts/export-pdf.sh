#!/bin/sh
# Export the deck to PDF (plain + speaker-notes versions) via headless Chrome.
set -e

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4173
URL="http://localhost:$PORT"

npm run build

npm run preview -- --port "$PORT" --strictPort >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null' EXIT

until curl -sf "$URL/" >/dev/null; do sleep 0.3; done

# Chrome sometimes prints before reveal.js finishes its print layout, yielding
# a blank one-pager well under 1 MB — retry until the output looks complete.
print() {
  for attempt in 1 2 3 4 5 6 7 8; do
    "$CHROME" --headless --disable-gpu \
      --run-all-compositor-stages-before-draw --virtual-time-budget=30000 \
      --no-pdf-header-footer --print-to-pdf="$1" "$2" 2>/dev/null
    size=$(wc -c <"$1")
    if [ "$size" -gt 1000000 ]; then
      echo "wrote $1"
      return 0
    fi
    echo "retrying $1 (attempt $attempt rendered blank)"
  done
  echo "ERROR: $1 still blank after 8 attempts" >&2
  return 1
}

print my-journey-se-to-ai.pdf "$URL/?print-pdf"
print my-journey-se-to-ai-with-notes.pdf "$URL/?print-pdf&showNotes=separate-page"
