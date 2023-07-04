import React, { useState, useEffect } from 'react';
import Grid from './Grid';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const currentDate = getCurrentDate();
    const storedDate = localStorage.getItem('clickDate');

    if (currentDate !== storedDate) {
      setIsClicked(false);
      setAlertMessage('');
    }

    setRandomNumber(generateRandomNumber());
  }, []);

  const handleClick = (id) => {
    if (isClicked) {
      setAlertMessage(`You've clicked today, Continue tomorrow!`);
    } else {
      if (id === randomNumber) {
        setAlertMessage('You Win!');
      } else {
        setAlertMessage('Sorry!');
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
      {alertMessage && <div>{alertMessage}</div>}
      <Grid handleClick={handleClick} isClicked={isClicked} randomNumber={randomNumber} />
    </div>
  );
}

export default App;
