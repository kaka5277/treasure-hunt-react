import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Grid({ handleClick, isClicked, randomNumber }) {
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [date, setDate] = useState(new Date().getDate());
  const [alertMessage, setAlertMessage] = useState('');

  const handleItemClick = (index) => {
    if (date === new Date().getDate()) {
      if (!clicked) {
        if (index === randomNumber) {
          setAlertMessage('You Win!');
        } else {
          setAlertMessage('Sorry!');
        }
        setClicked(true);
      } else {
        setAlertMessage(`You've clicked today, Continue tomorrow!`);
      }
    } else {
      setClicked(false);
      setDate(new Date().getDate());
      handleClick(index);
    }
    setDisabled(true);
  };

  const renderGridItems = () => {
    const gridItems = [];
    for (let i = 1; i <= 64; i++) {
      gridItems.push(
        <div
          key={i}
          onClick={() => handleItemClick(i)}
          className={`grid-item ${disabled ? 'disabled' : ''}`}
        >
          {i}
        </div>
      );
    }
    return gridItems;
  };

  return (
    <div>
      {alertMessage && <div>{alertMessage}</div>}
      <div className="grid-container">{renderGridItems()}</div>
    </div>
  );
}

Grid.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  randomNumber: PropTypes.number.isRequired,
};

export default Grid;
