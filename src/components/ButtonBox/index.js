const ButtonBox = ({ classNAme, arr, obj }) => {
  return (
    <div className={classNAme}>
      {arr.map((item) => {
        console.log(arr);
        return <button>{obj[item].label}</button>;
      })}
    </div>
  );
};

export default ButtonBox;
