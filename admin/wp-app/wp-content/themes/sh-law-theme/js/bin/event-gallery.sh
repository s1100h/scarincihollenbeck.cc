#!/bin/bash
echo "Removing old event gallery files..."
rm -fr ../../includes/assets/js/event-gallery.min.js ../../includes/assets/css/event-gallery.min.css
echo "Creating new event gallery files..."
touch ../../includes/assets/js/event-gallery.min.js ../../includes/assets/css/event-gallery.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/eventGallery.bundle.js ../../includes/assets/js/event-gallery.min.js
cp ../dist/eventGallery.bundle.css ../../includes/assets/css/event-gallery.min.css
echo "building event gallery files completed!"