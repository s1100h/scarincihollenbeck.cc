#!/bin/bash
echo "Removing old 404 page files..."
rm -fr ../../includes/assets/js/page404.min.js ../../includes/assets/css/page404.min.css
echo "Creating new 404 page files..."
touch ../../includes/assets/js/page404.min.js ../../includes/assets/css/page404.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/page404.bundle.js ../../includes/assets/js/page404.min.js
cp ../dist/page404.bundle.css ../../includes/assets/css/page404.min.css
echo "building 404 page files completed!"