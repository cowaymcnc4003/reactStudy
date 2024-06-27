const Controller = ({ conterOnClick }) => {
  return (<div>
    <button onClick={() => {
      conterOnClick(-1);
    }}>-1</button>
    <button onClick={() => {
      conterOnClick(-10);
    }}>-10</button>
    <button onClick={() => {
      conterOnClick(-100);
    }}>-100</button>
    <button onClick={() => {
      conterOnClick(100);
    }}>+100</button>
    <button onClick={() => {
      conterOnClick(10);
    }}>+10</button>
    <button onClick={() => {
      conterOnClick(1);
    }}>+1</button>
  </div>);
}

export default Controller;