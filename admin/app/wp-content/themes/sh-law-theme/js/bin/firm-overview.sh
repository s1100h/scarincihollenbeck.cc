#!/bin/bash
echo "Removing old firm overview files..."
rm -fr ../../includes/assets/js/firm-overview.min.js ../../includes/assets/css/firm-overview.min.css
echo "Creating new firm overview files..."
touch ../../includes/assets/js/firm-overview.min.js ../../includes/assets/css/firm-overview.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/firmOverview.bundle.js ../../includes/assets/js/firm-overview.min.js
cp ../dist/firmOverview.bundle.css ../../includes/assets/css/firm-overview.min.css
echo "building firm overview files completed!"