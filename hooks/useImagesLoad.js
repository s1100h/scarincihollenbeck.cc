import { useEffect, useState } from 'react';

export const useImagesLoad = (onReadyCallback, containerRef) => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const allImages = Array.from(container.querySelectorAll('img'));
    const imageLoadPromises = allImages.map(
      (img) => new Promise((resolve) => {
        if (img.complete && img.naturalHeight !== 0) {
          resolve();
        } else {
          img.addEventListener('load', () => {
            resolve();
          });
          img.addEventListener('error', () => {
            resolve();
          });
        }
      }),
    );

    Promise.all(imageLoadPromises).then(() => {
      setAreImagesLoaded(true);
    });
  }, [containerRef]);

  useEffect(() => {
    if (areImagesLoaded) {
      onReadyCallback();
    }
  }, [areImagesLoaded, onReadyCallback]);

  return { areImagesLoaded };
};
