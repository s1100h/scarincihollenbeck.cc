#!/bin/bash
echo "Removing old quick-news files..."
rm -fr ../../includes/assets/js/quick-news.min.js ../../includes/assets/css/quick-news.min.css
echo "Creating new quick-news files..."
touch ../../includes/assets/js/quick-news.min.js ../../includes/assets/css/quick-news.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/quickNews.bundle.js ../../includes/assets/js/quick-news.min.js
cp ../dist/quickNews.bundle.css ../../includes/assets/css/quick-news.min.css
echo "building quick-news files completed!"