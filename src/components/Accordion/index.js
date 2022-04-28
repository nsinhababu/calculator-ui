import './styles.css';

const Accordion = () => {
  return (
    <div className='accordion-container full-width'>
      <p className='apy'>APY</p>
      <p className='apy-percentage'>63.34%</p>
      <ul>
        <li>Calculated based on current rates</li>
        <li>
          All fugures are estimates provided for your convenience only, and by
          no means represent guaranted returns.
        </li>
      </ul>
    </div>
  );
};

export default Accordion;
