#!/bin/bash
echo "Removing old category files..."
rm -fr ../../includes/assets/js/category.min.js ../../includes/assets/css/category.min.css
echo "Creating new category files..."
touch ../../includes/assets/js/category.min.js ../../includes/assets/css/category.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/category.bundle.js ../../includes/assets/js/category.min.js
cp ../dist/category.bundle.css ../../includes/assets/css/category.min.css
echo "building category files completed!"