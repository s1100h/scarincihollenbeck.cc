#!/bin/bash
echo "Removing old archive attorney files..."
rm -fr ../../includes/assets/js/archive-attorneys.min.js ../../includes/assets/css/archive-attorneys.min.css
echo "Creating new archive attorney files..."
touch ../../includes/assets/js/archive-attorneys.min.js ../../includes/assets/css/archive-attorneys.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/archiveAttorney.bundle.js ../../includes/assets/js/archive-attorneys.min.js
cp ../dist/archiveAttorney.bundle.css ../../includes/assets/css/archive-attorneys.min.css
echo "building archive attorney files completed!"

