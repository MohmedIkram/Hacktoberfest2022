import React, { useRef, useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [Error, setError] = useState(false);
  const [list, setList] = useState([]);
  const color = useRef(null);
  const [totalcolor, setTotalColor] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const col = Number.parseInt(totalcolor);
    try {
      let c1 = new Values(color.current.value).all(col);
      setList(c1);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <div>
      <section className='container'>
        <form onSubmit={handleSubmit} className='form'>
          <input
            className='NumberInput'
            type='number'
            placeholder='Weight Difference of Shade'
            min='1'
            name='totalcolor'
            value={totalcolor}
            onChange={(e) => {
              setTotalColor(e.target.value);
            }}
          />
          <div>
            <input
              type='text'
              name='color'
              ref={color}
              placeholder='Input color i-e #fff or white'
              className={Error ? 'error' : null}
            />
            <button type='submit' className='btn'>
              Generate
            </button>
          </div>
        </form>
      </section>
      <section className='colors'>
        {list.map((col, index) => {
          console.log(col);
          return (
            <SingleColor
              key={index}
              index={index}
              hexa={col.hex}
              {...col}
            ></SingleColor>
          );
        })}
      </section>
      <footer className='footer'>
        <h4>&#169; 2021 right reversed</h4>
      </footer>
    </div>
  );
}

export default App;
