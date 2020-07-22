#!/bin/bash
echo "Removing old single admin files..."
rm -fr ../../includes/assets/js/single-admin.min.js ../../includes/assets/css/single-admin.min.css
echo "Creating new single admin files..."
touch ../../includes/assets/js/single-admin.min.js ../../includes/assets/css/single-admin.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/singleAdmin.bundle.js ../../includes/assets/js/single-admin.min.js
cp ../dist/singleAdmin.bundle.css ../../includes/assets/css/single-admin.min.css
echo "building single admin files completed!"