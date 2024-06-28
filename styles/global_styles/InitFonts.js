import { lato, poppins } from 'public/fonts/fonts';
import React from 'react';

const InitFonts = (fonts) => (
  <style jsx global>
    {`
      :root {
        --font-poppins: ${poppins.style.fontFamily};
        --font-lato: ${lato.style.fontFamily};
      }
    `}
  </style>
);

export default InitFonts;
