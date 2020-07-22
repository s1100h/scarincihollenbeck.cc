#!/bin/bash
echo "Removing old single attorneys files..."
rm -fr ../../includes/js/single-attorneys.min.js ../../includes/css/single-attorneys.min.css
echo "Creating new single attorneys files..."
touch ../../includes/js/single-attorneys.min.js ../../includes/css/single-attorneys.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/singleAttorney.bundle.js ../../includes/js/single-attorneys.min.js
cp ../dist/singleAttorney.bundle.css ../../includes/css/single-attorneys.min.css
echo "building single attorneys files completed!"