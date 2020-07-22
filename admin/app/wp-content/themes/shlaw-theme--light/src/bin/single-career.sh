#!/bin/bash
echo "Removing old single career files..."
rm -fr ../../includes/js/single-career.min.js ../../includes/css/single-career.min.css
echo "Creating new single career files..."
touch ../../includes/js/single-career.min.js ../../includes/css/single-career.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/singleCareer.bundle.js ../../includes/js/single-career.min.js
cp ../dist/singleCareer.bundle.css ../../includes/css/single-career.min.css
echo "building single career files completed!"