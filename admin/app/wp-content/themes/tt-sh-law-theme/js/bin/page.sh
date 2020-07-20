#!/bin/bash
echo "Removing old page files..."
rm -fr ../../includes/assets/js/page.min.js ../../includes/assets/css/page.min.css
echo "Creating new page files..."
touch ../../includes/assets/js/page.min.js ../../includes/assets/css/page.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/page.bundle.js ../../includes/assets/js/page.min.js
cp ../dist/page.bundle.css ../../includes/assets/css/page.min.css
echo "building page files completed!"