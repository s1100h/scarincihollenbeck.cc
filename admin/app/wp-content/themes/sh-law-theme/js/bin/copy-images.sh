#!/bin/bash

png=$(ls ../dist/*png | wc -l)
eot=$(ls ../dist/*eot | wc -l)
gif=$(ls ../dist/*gif | wc -l)
jpg=$(ls ../dist/*jpg | wc -l)
svg=$(ls ../dist/*svg | wc -l)
ttf=$(ls ../dist/*ttf | wc -l)
woff=$(ls ../dist/*woff | wc -l)

zero=0

if [ $png -gt $zero ]; then
  echo 'copying png files...'
  cp ../dist/*png ../../includes/assets/images/
fi

if [ $eot -gt $zero ]; then
  echo 'copying eot files...'
  cp ../dist/*eot ../../includes/assets/images/
fi

if [ $gif -gt $zero ]; then
  echo 'copying gif files...'
  cp ../dist/*gif ../../includes/assets/images/
fi

# if [ $jpeg -gt $zero ]; then
#   echo 'copying jpeg files...'
#   cp ../dist/*jpeg ../../includes/assets/images/
# fi

if [ $jpg -gt $zero ]; then
  echo 'copying jpg files...'
  cp ../dist/*jpg ../../includes/assets/images/
fi

if [ $svg -gt $zero ]; then
  echo 'copying svg files...'
  cp ../dist/*svg ../../includes/assets/images/
fi

if [ $ttf -gt $zero ]; then
  echo 'copying tff files...'
  cp ../dist/*ttf ../../includes/assets/images/
fi

if [ $woff -gt $zero ]; then
  echo 'copying woff files...'
  cp ../dist/*woff ../../includes/assets/images/
fi

echo "building image files completed!"
