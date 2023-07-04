import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Grid({ handleClick, isClicked, randomNumber }) {
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [date, setDate] = useState(new Date().getDate());

  const handleItemClick = (index) => {
    if (date === new Date().getDate()) {
      if (!clicked) {
        if (index === randomNumber) {
          alert('You Win!');
        } else {
          alert('Sorry!Wrong');
        }
        setClicked(true);
      } else {
        alert(`You've clicked today,try again tommorow`);
      }
    } else {
      setClicked(false);
      setDate(new Date().getDate());
      handleClick();
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

  return <div className="grid-container">{renderGridItems()}</div>;
}

Grid.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  randomNumber: PropTypes.number.isRequired,
};

export default Grid;


// import React from 'react';
// import PropTypes from 'prop-types';

// function Grid({ handleClick, isClicked, randomNumber }) {
//   const renderGridItems = () => {
//     const gridItems = [];
//     for (let i = 1; i <= 64; i++) {
//       gridItems.push(
//         <div key={i} onClick={() => handleClick(i)} className={`grid-item ${isClicked ? 'disabled' : ''}`}>
//           {i}
//         </div>
//       );
//     }
//     return gridItems;
//   };

//   return (
//     <div className="grid-container">
//       {renderGridItems()}
//     </div>
//   );
// }

// Grid.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isClicked: PropTypes.bool.isRequired,
//   randomNumber: PropTypes.number.isRequired,
// };

// export default Grid;



// import React from 'react';
// import PropTypes from 'prop-types';
// import './styles.css'; // 导入样式文件

// function Grid({ handleClick, isClicked, randomNumber }) {
//   const renderGridItems = () => {
//     const gridItems = [];
//     for (let i = 1; i <= 64; i++) {
//       gridItems.push(
//         <div key={i} onClick={() => handleClick(i)} className={`grid-item ${isClicked ? 'disabled' : ''}`}>
//           {i}
//         </div>
//       );
//     }
//     return gridItems;
//   };

//   return (
//     <div className="grid-container">
//       {renderGridItems()}
//     </div>
//   );
// }

// Grid.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isClicked: PropTypes.bool.isRequired,
//   randomNumber: PropTypes.number.isRequired,
// };

// export default Grid;



// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './styles.css';

// function Grid({ handleClick, isClicked, randomNumber }) {
//   const [disabled, setDisabled] = useState(false);

//   const handleItemClick = (index) => {
//     if (!isClicked) {
//       if (index === randomNumber) {
//         alert('You Win!');
//       } else {
//         alert(`Sorry,wrong!`);
//       }
//       setDisabled(true);
//     } else {
//       alert(`You've clicked today,Try again tommorow!`);
//     }
//   };

//   const renderGridItems = () => {
//     const gridItems = [];
//     for (let i = 1; i <= 64; i++) {
//       gridItems.push(
//         <div
//           key={i}
//           onClick={() => handleItemClick(i)}
//           className={`grid-item ${disabled ? 'disabled' : ''}`}
//         >
//           {i}
//         </div>
//       );
//     }
//     return gridItems;
//   };

//   return <div className="grid-container">{renderGridItems()}</div>;
// }

// Grid.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isClicked: PropTypes.bool.isRequired,
//   randomNumber: PropTypes.number.isRequired,
// };

// export default Grid;



