const ButtonBox = ({ classNAme, arr, obj }) => {
  return (
    <div className={classNAme}>
      {arr.map((item) => {
        return <button key={item}>{obj[item].label}</button>;
      })}
    </div>
  );
};

export default ButtonBox;
