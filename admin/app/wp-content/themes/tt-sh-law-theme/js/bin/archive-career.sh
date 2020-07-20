#!/bin/bash
echo "Removing old archive career files..."
rm -fr ../../includes/assets/js/archive-career.min.js ../../includes/assets/css/archive-career.min.css
echo "Creating new archive career files..."
touch ../../includes/assets/js/archive-career.min.js ../../includes/assets/css/archive-career.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/archiveCareer.bundle.js ../../includes/assets/js/archive-career.min.js
cp ../dist/archiveCareer.bundle.css ../../includes/assets/css/archive-career.min.css
echo "building archive career files completed!"
