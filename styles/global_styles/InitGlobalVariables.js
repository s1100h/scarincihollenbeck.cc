import React from 'react';

const InitGlobalVariables = ({ children }) => {
  return (
    <style jsx global>
    {`
      :root {
        ${children}
      }
    `}
  </style>
  );
};

export default InitGlobalVariables;