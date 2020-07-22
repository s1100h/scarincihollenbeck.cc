#!/bin/bash
echo "Removing old archive admin files..."
rm -fr ../../includes/assets/js/archive-admin.min.js ../../includes/assets/css/archive-admin.min.css
echo "Creating new archive admin files..."
touch ../../includes/assets/js/archive-admin.min.js ../../includes/assets/css/archive-admin.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/archiveAdmin.bundle.js ../../includes/assets/js/archive-admin.min.js
cp ../dist/archiveAdmin.bundle.css ../../includes/assets/css/archive-admin.min.css
echo "Building archive admin files completed!"

