import React, { useState, useEffect } from 'react';
import Grid from './Grid';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const currentDate = getCurrentDate();
    const storedDate = localStorage.getItem('clickDate');

    if (currentDate !== storedDate) {
      setIsClicked(false);
    }

  
    setRandomNumber(generateRandomNumber());
  }, []);

  const handleClick = (id) => {
    if (isClicked) {
      alert('已点击过，明天继续');
    } else {
      if (id === randomNumber) {
        alert('中奖');
      } else {
        alert('猜错');
      }
      setIsClicked(true);
      localStorage.setItem('clickDate', getCurrentDate());
    }
  };

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 64) + 1;
  };

  return (
    <div>
      <Grid handleClick={handleClick} isClicked={isClicked} randomNumber={randomNumber} />
    </div>
  );
}

export default App;
