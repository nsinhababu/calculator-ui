import './App.css';
// Import Components
import Toggle from './components/Toggle';
import ButtonBox from './components/ButtonBox';
// Import data
import { timeFrame, tierList } from './const';
function App() {
  return (
    <div className='App'>
      <div className='container'>
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
        <div className='full-width balance-container'>
          <p className='use-balance'>USE BALANCE</p>
          <p>$1000</p>
          <p>$100</p>
          <span>~ $20.82</span>
        </div>
        <p className='time-frame'>Timeframe</p>
        <ButtonBox
          classNAme='time-frame-container full-width'
          arr={Object.keys(timeFrame)}
          obj={timeFrame}
        />
        <div className='accelerated-pay'>
          <p>Enable Accelerated APY</p>
          <Toggle />
        </div>

        <ButtonBox
          classNAme='tier-container full-width'
          arr={Object.keys(tierList)}
          obj={tierList}
        />

        <p className='roi'>ROI at Current Rates</p>

        <div className='full-width roi-box'>
          <img src='assets/pencil.jpg' alt='pencil' />
          <p>100.0 USD </p>
        </div>
      </div>
    </div>
  );
}

export default App;
