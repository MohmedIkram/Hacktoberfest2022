import { useEffect, useState } from 'react';

import '../styles/home.scss';

const icon = 'https://cdn-icons-png.flaticon.com/512/719/719747.png';

export function Home() {
  const [red, setRed] = useState('0');
  const [green, setGreen] = useState('0');
  const [blue, setBlue] = useState('0');
  const [date, setDate] = useState(new Date());
  const [theme, setTheme] = useState('darkTheme');

  function refreshClock() {
    const date = new Date();
    setDate(date);

    if (date.getHours() >= 6 && date.getHours() <= 17) {
      setTheme('lightTheme');
    }
    else {
      setTheme('darkTheme');
    }
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={`container ${theme}`}>
      <h1>Gerador RGB </h1>
      < div className='date' >
        <img src={icon} alt='pick color icon' />
        <p>{date.toLocaleDateString() + ' - ' + date.toLocaleTimeString()}</p>
      </div>
      < main>
        <div className='input-container'>
          <div id='red'><input type='range' min='0' max='255' onChange={(e) => setRed(e.target.value)} /></div>
          <div id='green'><input type='range' min='0' max='255' onChange={(e) => setGreen(e.target.value)} /></div>
          <div id='blue'><input type='range' min='0' max='255' onChange={(e) => setBlue(e.target.value)} /></div>
        </div>
        <div className='circle-color' style={{ background: `rgb(${red}, ${green}, ${blue})` }}></div>
        <strong>{`rgb(${red}, ${green}, ${blue})`}</strong>
      </main>
      <p> Desenvolvido por @karoldm ❤</p>
    </div>
  );
}