#!/bin/bash
#!/bin/bash
echo "Removing old archive location files..."
rm -fr ../../includes/assets/js/archive-location.min.js ../../includes/assets/css/archive-location.min.css
echo "Creating new archive location files..."
touch ../../includes/assets/js/archive-location.min.js ../../includes/assets/css/archive-location.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/archiveLocation.bundle.js ../../includes/assets/js/archive-location.min.js
cp ../dist/archiveLocation.bundle.css ../../includes/assets/css/archive-location.min.css
echo "building archive location files completed!"
