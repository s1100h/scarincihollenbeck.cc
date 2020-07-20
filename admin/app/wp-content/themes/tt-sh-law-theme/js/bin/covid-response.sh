#!/bin/bash
echo "Removing old covid response files..."
rm -fr ../../includes/assets/js/covid-response.min.js ../../includes/assets/css/covid-response.min.css
echo "Creating new covid response files..."
touch ../../includes/assets/js/covidResponse.min.js ../../includes/assets/css/covid-response.min.css
echo "Copying contents from /dist to /includes/..."
cp ../dist/covidResponse.bundle.js ../../includes/assets/js/covid-response.min.js
cp ../dist/covidResponse.bundle.css ../../includes/assets/css/covid-response.min.css
echo "building covid response files completed!"