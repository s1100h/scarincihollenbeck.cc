#!/bin/bash
echo "Removing old single files..."
rm -fr ../../includes/js/single.min.js ../../includes/css/single.min.css
echo "Creating new single files..."
touch ../../includes/js/single.min.js ../../includes/css/single.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/single.bundle.js ../../includes/js/single.min.js
cp ../dist/single.bundle.css ../../includes/css/single.min.css
echo "building single files completed!"