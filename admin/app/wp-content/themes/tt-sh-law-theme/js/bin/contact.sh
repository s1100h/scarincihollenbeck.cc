#!/bin/bash
echo "Removing old contact files..."
rm -fr ../../includes/assets/js/contact.min.js ../../includes/assets/css/contact.min.css
echo "Creating new page files..."
touch ../../includes/assets/js/contact.min.js ../../includes/assets/css/contact.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/contact.bundle.js ../../includes/assets/js/contact.min.js
cp ../dist/contact.bundle.css ../../includes/assets/css/contact.min.css
echo "building contact files completed!"