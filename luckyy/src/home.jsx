import { useState } from 'react';
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
    const targetDigits = number.split('');

    const spinInterval = setInterval(() => {
      setDigits((prevDigits) => prevDigits.map(() => Math.floor(Math.random() * 10).toString()));
    }, 90);

    setTimeout(() => {
      clearInterval(spinInterval);
      setDigits(targetDigits);
      setShowPartyPoppers(true);
    }, 1400);
  };

  return (
    <div className="page">
      <div className="ambient ambient-one" aria-hidden></div>
      <div className="ambient ambient-two" aria-hidden></div>

      <header className="hero">
        <div className=""><img src="/ocym-shiels.png" alt="OCYM Shield" height={150} /></div>
        <div>
          <p className="eyebrow">Paliakara St. George Orthodox Church</p>
          <h1 className="headline">Annual Lucky Draw</h1>
          <p className="subhead">Tap the button to unveil the next winning ticket. Every roll stays true to the configured draw ranges.</p>
        </div>
      </header>

      <main className="card">
        <div className="card-top">
          <div>
            <p className="label">Current draw</p>
            <h2 className="draw-title">Live selection</h2>
          </div>
          <span className="status-pill"></span>
        </div>

        <div className="number-panel">
          {digits.map((digit, index) => (
            <div key={index} className="digit-tile">
              <span>{digit}</span>
            </div>
          ))}
        </div>

        <button className="cta" onClick={generateLuckyNumber}>
          Generate lucky number
        </button>

        <p className="helper">Results are randomized within your preset ticket ranges. Share the screen when the confetti pops!</p>
      </main>

      <footer className="footnote">Powered by the OCYM community • Transparency first</footer>

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