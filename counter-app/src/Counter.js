import Buttoncontainer from "./Buttoncontainer";
const Counter = ({ val, incre, decre }) => {
  let v = null;
  if (val < 0) {
    v = <p>negative value</p>;
  } else if (val > 5) {
    v = <p>positive value</p>;
  }
  return (
    <div className="counter">
      <h1>{val}</h1>
      {v}
      <Buttoncontainer incre={incre} decre={decre}></Buttoncontainer>
    </div>
  );
};
export default Counter;
