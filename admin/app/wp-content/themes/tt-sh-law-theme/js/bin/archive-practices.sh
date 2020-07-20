#!/bin/bash
echo "Removing old archive practices files..."
rm -fr ../../includes/assets/js/archive-practices.min.js ../../includes/assets/css/archive-practices.min.css
echo "Creating new archive practices files..."
touch ../../includes/assets/js/archive-practices.min.js ../../includes/assets/css/archive-practices.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/archivePractice.bundle.js ../../includes/assets/js/archive-practices.min.js
cp ../dist/archivePractice.bundle.css ../../includes/assets/css/archive-practices.min.css
echo "building archive practices files completed!"
