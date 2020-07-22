#!/bin/bash
echo "Removing old single files..."
rm -fr ../../includes/assets/js/single.min.js ../../includes/assets/css/single.min.css
echo "Creating new single files..."
touch ../../includes/assets/js/single.min.js ../../includes/assets/css/single.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/single.bundle.js ../../includes/assets/js/single.min.js
cp ../dist/single.bundle.css ../../includes/assets/css/single.min.css
echo "building single files completed!"