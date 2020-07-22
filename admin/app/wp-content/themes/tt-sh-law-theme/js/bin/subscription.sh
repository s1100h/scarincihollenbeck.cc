#!/bin/bash
echo "Removing old subscription page files..."
rm -fr ../../includes/assets/js/subscription-page.min.js ../../includes/assets/css/subscription-page.min.css
echo "Creating new subscription page  files..."
touch ../../includes/assets/js/subscription-page.min.js ../../includes/assets/css/subscription-page.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/subscriptionPage.bundle.js ../../includes/assets/js/subscription-page.min.js
cp ../dist/subscriptionPage.bundle.css ../../includes/assets/css/subscription-page.min.css
echo "building subscription page  files completed!"