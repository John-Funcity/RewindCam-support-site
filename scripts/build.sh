#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
mkdir -p dist/assets dist/support dist/privacy dist/terms
cp index.html 404.html dist/
cp assets/styles.css assets/site.js dist/assets/
cp support/index.html dist/support/
cp privacy/index.html dist/privacy/
cp terms/index.html dist/terms/
