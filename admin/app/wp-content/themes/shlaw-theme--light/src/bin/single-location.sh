#!/bin/bash
echo "Removing old single location files..."
rm -fr ../../includes/js/single-location.min.js ../../includes/css/single-location.min.css
echo "Creating new single location files..."
touch ../../includes/js/single-location.min.js ../../includes/css/single-location.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/singleLocation.bundle.js ../../includes/js/single-location.min.js
cp ../dist/singleLocation.bundle.css ../../includes/css/single-location.min.css
echo "building single location files completed!"