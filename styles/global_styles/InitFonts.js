import { poppins } from 'public/fonts/fonts';
import React from 'react';

const InitFonts = (fonts) => (
  <style jsx global>
    {`
      :root {
        --font-poppins: ${poppins.style.fontFamily};
      }
    `}
  </style>
);

export default InitFonts;
