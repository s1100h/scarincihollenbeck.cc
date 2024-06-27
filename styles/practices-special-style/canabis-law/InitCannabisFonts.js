import { licorice, rajdhani } from 'public/fonts/fonts';
import React from 'react';

const InitCannabisFonts = () => {
  return (
    <style jsx global>
      {`
        :root {
          --font-rajdhani: ${rajdhani.style.fontFamily};
          --font-licorice: ${licorice.style.fontFamily};
        }
      `}
    </style>
  );
};

export default InitCannabisFonts;