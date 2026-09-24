#!/bin/sh
# Rebuild vendor/vendor.js (three.js + three-bvh-csg) and the bundled font.
# Usage: sh tools/build-vendor.sh   (run from pocket-cad/, needs node + npm)
set -e
cd "$(dirname "$0")"
WORK=$(mktemp -d)
cp vendor-entry.js "$WORK/"
cd "$WORK"
npm init -y >/dev/null
npm i --silent three@0.180.0 three-mesh-bvh@0.9.15 three-bvh-csg@0.0.18 esbuild@0.28.2
npx esbuild vendor-entry.js --bundle --format=esm --minify --legal-comments=eof \
  --outfile="$OLDPWD/../vendor/vendor.js"
cp node_modules/three/examples/fonts/helvetiker_bold.typeface.json "$OLDPWD/../vendor/"
echo "done"
