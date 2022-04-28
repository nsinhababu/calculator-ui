import { useState } from 'react';
import './App.css';
// Import Components
import Toggle from './components/Toggle';
import ButtonBox from './components/ButtonBox';
import Accordion from './components/Accordion';
// Import data
import { timeFrame, tierList } from './const';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <div className='container' style={{ height: isOpen ? '832px' : '697px' }}>
        <button className='close-btn'></button>
        <p className='logo'>Calculator</p>
        <div className='cake-container'>
          <img
            src='assets/icon-cake512.png'
            alt='cake-img'
            className='cake-logo'
          />
          <p className='cake'>cake</p>
        </div>
        <div className='toggle-container'>
          <Toggle />
          <p className='currency'>USD</p>
        </div>
        <div className='full-width data-display'>
          <p>2.10000 CAKE</p>
        </div>

        {/* Use balance section */}

        <div className='full-width balance-container'>
          <p className='use-balance'>USE BALANCE</p>
          <p>$1000</p>
          <p>$100</p>
          <span>~ $20.82</span>
        </div>

        {/* Time frame section */}

        <p className='time-frame'>Timeframe</p>
        <ButtonBox
          classNAme='time-frame-container full-width'
          arr={Object.keys(timeFrame)}
          obj={timeFrame}
        />

        {/* Accelerated pay section */}

        <div className='accelerated-pay'>
          <p>Enable Accelerated APY</p>
          <Toggle />
        </div>

        {/* Tier section */}

        <ButtonBox
          classNAme='tier-container full-width'
          arr={Object.keys(tierList)}
          obj={tierList}
        />

        {/* ROI section */}

        <p className='roi'>ROI at Current Rates</p>

        <div className='full-width roi-box'>
          <img src='assets/pencil.jpg' alt='pencil' />
          <p>100.0 USD </p>
        </div>
        <p className='gift'>~ 3CAKE + 10 DON</p>

        <div className='full-width btn-container'>
          <button className='apply-btn'>Apply</button>
          <button className='cancel-btn'>Cancel</button>
        </div>

        {/* Show Details section */}
        <div className='show-details full-width'>
          <div className='s-d-text-btn-container'>
            <p className='show-details-text'>
              {isOpen ? 'Hide details' : 'Show details'}
            </p>
            <button
              className='show-details-btn'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img src='assets/arrow-down.png' alt='' />
            </button>
          </div>
          {isOpen && <Accordion />}
        </div>
      </div>
    </div>
  );
}

export default App;
