#!/bin/bash
echo "Removing old author-two files..."
rm -fr ../../includes/assets/js/author.min.js ../../includes/assets/css/author.min.css
echo "Creating new author-two files..."
touch ../../includes/assets/js/author.min.js ../../includes/assets/css/author.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/authorTwo.bundle.js ../../includes/assets/js/author.min.js
cp ../dist/authorTwo.bundle.css ../../includes/assets/css/author.min.css
echo "building author files completed!"