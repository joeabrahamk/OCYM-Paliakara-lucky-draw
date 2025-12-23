import { useState } from 'react';
import './home.css';

const Home = () => {
  const [digits, setDigits] = useState(['0', '0', '0', '0']);
  const [showPartyPoppers, setShowPartyPoppers] = useState(false);
  const [bookNumber, setBookNumber] = useState(null);

  // Book number to coupon range mapping
  const bookRanges = [
    { book: 1, start: 1001, end: 1050 },
    { book: 2, start: 1051, end: 1100 },
    { book: 3, start: 1101, end: 1150 },
    { book: 4, start: 1151, end: 1161 },
    { book: 5, start: 1201, end: 1250 },
    { book: 7, start: 1301, end: 1350 },
    { book: 8, start: 1351, end: 1400 },
    { book: 9, start: 1401, end: 1450 },
    { book: 10, start: 1451, end: 1500 },
    { book: 13, start: 1601, end: 1650 },
    { book: 14, start: 1651, end: 1700 },
    { book: 16, start: 1751, end: 1800 },
    { book: 17, start: 1801, end: 1820 },
    { book: 18, start: 1850, end: 1861 },
    { book: 19, start: 1901, end: 1950 },
    { book: 20, start: 1951, end: 2000 },
    { book: 21, start: 2001, end: 2050 },
    { book: 22, start: 2051, end: 2100 },
    { book: 23, start: 2101, end: 2150 },
    { book: 25, start: 2201, end: 2250 },
    { book: 27, start: 2301, end: 2350 },
    { book: 28, start: 2351, end: 2400 },
  ];

  const getBookNumber = (couponNumber) => {
    const num = parseInt(couponNumber, 10);
    const range = bookRanges.find(r => num >= r.start && num <= r.end);
    return range ? range.book : null;
  };

  const generateLuckyNumber = () => {
    setShowPartyPoppers(false);

    const validNumbers = [
      // 1001-1050
      ...Array.from({ length: 50 }, (_, i) => (1001 + i).toString().padStart(4, '0')),
      // 1051-1100
      ...Array.from({ length: 50 }, (_, i) => (1051 + i).toString().padStart(4, '0')),
      // 1101-1150
      ...Array.from({ length: 50 }, (_, i) => (1101 + i).toString().padStart(4, '0')),
      // 1151-1161
      ...Array.from({ length: 11 }, (_, i) => (1151 + i).toString().padStart(4, '0')),
      // 1201-1250
      ...Array.from({ length: 50 }, (_, i) => (1201 + i).toString().padStart(4, '0')),
      // 1301-1350
      ...Array.from({ length: 50 }, (_, i) => (1301 + i).toString().padStart(4, '0')),
      // 1351-1400
      ...Array.from({ length: 50 }, (_, i) => (1351 + i).toString().padStart(4, '0')),
      // 1401-1450
      ...Array.from({ length: 50 }, (_, i) => (1401 + i).toString().padStart(4, '0')),
      // 1451-1500
      ...Array.from({ length: 50 }, (_, i) => (1451 + i).toString().padStart(4, '0')),
      // 1601-1650
      ...Array.from({ length: 50 }, (_, i) => (1601 + i).toString().padStart(4, '0')),
      // 1651-1700
      ...Array.from({ length: 50 }, (_, i) => (1651 + i).toString().padStart(4, '0')),
      // 1751-1800
      ...Array.from({ length: 50 }, (_, i) => (1751 + i).toString().padStart(4, '0')),
      // 1801-1820 special case 1850 added to next range.
      ...Array.from({ length: 20 }, (_, i) => (1801 + i).toString().padStart(4, '0')),
      // 1850-1861
      ...Array.from({ length: 12 }, (_, i) => (1850 + i).toString().padStart(4, '0')),
      // 1951-2000
      ...Array.from({ length: 50 }, (_, i) => (1951 + i).toString().padStart(4, '0')),
      // 2001-2050
      ...Array.from({ length: 50 }, (_, i) => (2001 + i).toString().padStart(4, '0')),
      // 2051-2100
      ...Array.from({ length: 50 }, (_, i) => (2051 + i).toString().padStart(4, '0')),
      // 2101-2150
      ...Array.from({ length: 50 }, (_, i) => (2101 + i).toString().padStart(4, '0')),
      // 2201-2250
      ...Array.from({ length: 50 }, (_, i) => (2201 + i).toString().padStart(4, '0')),
      // 2301-2350
      ...Array.from({ length: 50 }, (_, i) => (2301 + i).toString().padStart(4, '0')),
      // 2351-2400
      ...Array.from({ length: 50 }, (_, i) => (2351 + i).toString().padStart(4, '0')),
    ];

    const number = validNumbers[Math.floor(Math.random() * validNumbers.length)];
    const targetDigits = number.split('');

    const spinInterval = setInterval(() => {
      setDigits((prevDigits) => prevDigits.map(() => Math.floor(Math.random() * 10).toString()));
    }, 90);

    setTimeout(() => {
      clearInterval(spinInterval);
      setDigits(targetDigits);
      setBookNumber(getBookNumber(number));
      setShowPartyPoppers(true);
    }, 1400);
  };

  const resetNumber = () => {
    setDigits(['0', '0', '0', '0']);
    setBookNumber(null);
    setShowPartyPoppers(false);
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

        {bookNumber !== null && (
          <div className="book-number-display">
            <span className="book-label">Book No:</span>
            <span className="book-value">{bookNumber}</span>
          </div>
        )}

        <div className="button-group">
          <button className="cta" onClick={generateLuckyNumber}>
            Generate lucky number
          </button>
          <button className="cta-reset" onClick={resetNumber}>
            Reset
          </button>
        </div>

        <p className="helper">Results are randomized within your preset ticket ranges. Share the screen when the confetti pops!</p>
      </main>

      <footer className="footnote">
        <p>© 2025 OCYM Paliakara. All rights reserved</p>
        <p>Developed with ♥ Joe Abraham K </p>
      </footer>

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