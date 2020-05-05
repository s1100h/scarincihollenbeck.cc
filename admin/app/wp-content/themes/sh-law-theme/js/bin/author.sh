#!/bin/bash
echo "Removing old author files..."
rm -fr ../../includes/assets/js/author.min.js ../../includes/assets/css/author.min.css
echo "Creating new author files..."
touch ../../includes/assets/js/author.min.js ../../includes/assets/css/author.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/author.bundle.js ../../includes/assets/js/author.min.js
cp ../dist/author.bundle.css ../../includes/assets/css/author.min.css
echo "building author files completed!"