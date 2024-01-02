import empty from 'is-empty';
import React, { useEffect, useRef, useState } from 'react';
import {
  AnchorsTopBarItem,
  AnchorsTopBarItems,
  AnchorsTopBarWrapper,
} from 'styles/practices/AnchorTopBar.style';

const AnchorsTopBar = ({ title, anchorData }) => (
  <AnchorsTopBarWrapper>
    <h5>{title}</h5>
    <AnchorsTopBarItems>
      {!empty(anchorData)
        && Object.values(anchorData)?.map((item) => (
          <AnchorsTopBarItem key={item.id} href={`#${item.id}`}>
            {item.title}
          </AnchorsTopBarItem>
        ))}
    </AnchorsTopBarItems>
  </AnchorsTopBarWrapper>
);

export default AnchorsTopBar;
