#!/bin/bash
echo "Removing old page files..."
rm -fr ../../includes/js/page.min.js ../../includes/css/page.min.css
echo "Creating new page files..."
touch ../../includes/js/page.min.js ../../includes/css/page.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/page.bundle.js ../../includes/js/page.min.js
cp ../dist/page.bundle.css ../../includes/css/page.min.css
echo "building page files completed!"