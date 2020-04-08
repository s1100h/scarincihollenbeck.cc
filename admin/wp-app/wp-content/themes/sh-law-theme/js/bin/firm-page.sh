#!/bin/bash
echo "Removing old firm page files..."
rm -fr ../../includes/assets/js/firm-page.min.js ../../includes/assets/css/firm-page.min.css
echo "Creating new firm page files..."
touch ../../includes/assets/js/firm-page.min.js ../../includes/assets/css/firm-page.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/firmPage.bundle.js ../../includes/assets/js/firm-page.min.js
cp ../dist/firmPage.bundle.css ../../includes/assets/css/firm-page.min.css
echo "building firm page files completed!"