#!/bin/bash
echo "Removing old single practices files..."
rm -fr ../../includes/js/single-practices.min.js ../../includes/css/single-practices.min.css
echo "Creating new single practices files..."
touch ../../includes/js/single-practices.min.js ../../includes/css/single-practices.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/singlePractice.bundle.js ../../includes/js/single-practices.min.js
cp ../dist/singlePractice.bundle.css ../../includes/css/single-practices.min.css
echo "building single practices files completed!"