#!/bin/bash
echo "Removing old archive files..."
rm -fr ../../includes/assets/js/archive.min.js ../../includes/assets/css/archive.min.css
echo "Creating new archive files..."
touch ../../includes/assets/js/archive.min.js ../../includes/assets/css/archive.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/indexPage.bundle.js ../../includes/assets/js/archive.min.js
cp ../dist/indexPage.bundle.css ../../includes/assets/css/archive.min.css
echo "building archive files completed!"
