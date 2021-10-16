import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, hexa, index }) => {
  let [alert, setalert] = useState(false);
  useEffect(() => {
    const val = setInterval(() => {
      setalert(false);
    }, 2000);
    return () => clearInterval(val);
  }, [alert]);

  let col = '#000000';
  if (index > 15) {
    col = '#595959';
  }
  if (index > 19) {
    col = '#a1a1a1';
  }
  if (index > 23) {
    col = '#fcfcfc';
  }
  return (
    <article
      className='color'
      style={{ background: `rgb(${rgb})`, color: col }}
      onClick={() => {
        setalert(true);
        const str = `#${hexa}`;
        if (navigator.clipboard && window.isSecureContext) {
          return navigator.clipboard.writeText(str);
        } else {
          throw new console.error('failed to copy String');
        }
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{`#${hexa}`}</p>
      {alert && <p className='color-value'>Copy to clipboard </p>}
    </article>
  );
};

export default SingleColor;
