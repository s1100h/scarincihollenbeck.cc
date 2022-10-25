import React from 'react';
import { SearchSvg } from 'styles/GlobalSearch.style';
import { globalColor } from 'styles/global_styles/Global.styles';

export default function SearchSvgImage() {
  return (
    <SearchSvg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.70833 14.8533C12.2061 14.8533 15.0417 12.0533 15.0417 8.59927C15.0417 5.14527 12.2061 2.34526 8.70833 2.34526C5.21053 2.34526 2.375 5.14527 2.375 8.59927C2.375 12.0533 5.21053 14.8533 8.70833 14.8533Z"
        stroke={globalColor.gray.gray100}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6254 16.4171L13.1816 13.0165"
        stroke={globalColor.gray.gray100}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SearchSvg>
  );
}
