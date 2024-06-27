import { carilo } from 'public/fonts/fonts';
import React from 'react';

const InitEntertainmentFonts = () => {
  return (
    <style jsx global>
      {`
        :root {
          --font-carilo: ${carilo.style.fontFamily};
        }
      `}
    </style>
  );
};

export default InitEntertainmentFonts;