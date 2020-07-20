#!/bin/bash
echo "Removing old vendor files..."
rm -fr ../../includes/assets/js/vendor.min.js ../../includes/assets/css/vendor.min.css
echo "Creating new vendor files..."
touch ../../includes/assets/js/vendor.min.js ../../includes/assets/css/vendor.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/vendor.bundle.js ../../includes/assets/js/vendor.min.js
cp ../dist/vendor.bundle.css ../../includes/assets/css/vendor.min.css
echo "building vendor files completed!"