#!/bin/bash
echo "Removing old search files..."
rm -fr ../../includes/assets/js/search.min.js ../../includes/assets/css/search.min.css
echo "Creating new search files..."
touch ../../includes/assets/js/search.min.js ../../includes/assets/css/search.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/search.bundle.js ../../includes/assets/js/search.min.js
cp ../dist/search.bundle.css ../../includes/assets/css/search.min.css
echo "building search files completed!"