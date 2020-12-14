import React from 'react';

const Box = ({ addStyle, addClass }) => {
  const style = {
    width: '100%',
    height: '200px',
    ...addStyle
  };
  return <div className={`box ${addClass || ''}`} style={style}><p>Box</p></div>;
};

export default Box;
