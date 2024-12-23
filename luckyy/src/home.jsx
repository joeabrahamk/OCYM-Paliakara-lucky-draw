import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [digits, setDigits] = useState(['0', '0', '0', '0']);
  const [showPartyPoppers, setShowPartyPoppers] = useState(false);

  const generateLuckyNumber = () => {
    setShowPartyPoppers(false);

    const validNumbers = [
      ...Array.from({ length: 341 }, (_, i) => (101 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 99 }, (_, i) => (450 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 173 }, (_, i) => (551 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 208 }, (_, i) => (751 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 254 }, (_, i) => (983 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 89 }, (_, i) => (1251 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 35 }, (_, i) => (1351 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 94 }, (_, i) => (1401 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 16 }, (_, i) => (1501 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 55 }, (_, i) => (1551 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 31 }, (_, i) => (1651 + i).toString().padStart(4, '0')),
      ...Array.from({ length: 150 }, (_, i) => (1701 + i).toString().padStart(4, '0'))
    ];

    const number = validNumbers[Math.floor(Math.random() * validNumbers.length)];
    const newDigits = number.split('');

    newDigits.forEach((digit, index) => {
      setTimeout(() => {
        let interval = setInterval(() => {
          setDigits((prevDigits) => {
            const newDigits = [...prevDigits];
            newDigits[index] = Math.floor(Math.random() * 10).toString();
            return newDigits;
          });
        }, 100);

        setTimeout(() => {
          clearInterval(interval);
          setDigits((prevDigits) => {
            const newDigits = [...prevDigits];
            newDigits[index] = digit;
            return newDigits;
          });

          if (index === newDigits.length - 1) {
            setShowPartyPoppers(true);
          }
        }, 1000 + index * 500);
      }, index * 500);
    });
  };

  return (
    <div className="container">
      <h1>OCYM Paliakara St. George Orthodox Church</h1>
      <h1>Lucky Draw</h1>
      <button onClick={generateLuckyNumber}>Generate Lucky Number</button>
      <div className="number-container">
        {digits.map((digit, index) => (
          <div key={index} className="digit-box">
            {digit}
          </div>
        ))}
      </div>
      {showPartyPoppers && (
        <>
          <div className="party-popper left"></div>
          <div className="party-popper right"></div>
          <div className="party-popper top-left"></div>
          <div className="party-popper top-right"></div>
          {[...Array(500)].map((_, i) => (
            <div key={i} className="confetti" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}></div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;