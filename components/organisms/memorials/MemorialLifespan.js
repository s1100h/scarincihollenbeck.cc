import React from 'react';
import {
  MemorialLifespanList,
  MemorialLifespanItem,
} from 'styles/Memorials.style';
import empty from 'is-empty';

const MemorialLifespan = ({ born, death }) => {
  if (empty(born) && empty(death)) return null;
  return (
    <MemorialLifespanList>
      {!empty(born) && (
        <MemorialLifespanItem>
          <span>Born:</span>
          {born}
        </MemorialLifespanItem>
      )}
      {!empty(death) && (
        <MemorialLifespanItem>
          <span>Death:</span>
          {death}
        </MemorialLifespanItem>
      )}
    </MemorialLifespanList>
  );
};

export default MemorialLifespan;
