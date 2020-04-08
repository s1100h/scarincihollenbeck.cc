#!/bin/bash
echo "Removing old front page files..."
rm -fr ../../includes/assets/js/front-page.min.js ../../includes/assets/css/front-page.min.css
echo "Creating new front page files..."
touch ../../includes/assets/js/front-page.min.js ../../includes/assets/css/front-page.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/frontPage.bundle.js ../../includes/assets/js/front-page.min.js
cp ../dist/frontPage.bundle.css ../../includes/assets/css/front-page.min.css
echo "building front page files completed!"