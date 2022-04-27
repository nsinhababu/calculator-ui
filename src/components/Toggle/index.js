import './styles.css';

const Toggle = () => {
  return (
    <>
      <input id='toggle-checkbox' className='toggle' type='checkbox' />
      <label className='toggle-label' htmlFor='toggle-checkbox'></label>
    </>
  );
};

export default Toggle;
