import './App.css';
// Import Components
import Toggle from './components/Toggle';
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
      </div>
    </div>
  );
}

export default App;
