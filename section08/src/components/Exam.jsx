import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "INCREASE") {
  //   return state + action.data;
  // } else if (action.type === "DECREASE") {
  //   return state - action.data;
  // }

  switch (action.type) {
    case 'INCREASE': return state + action.data;
    case 'DECREASE': return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispath] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispath({
      type: "INCREASE",
      data: 1,
    });
  }
  const onClickMinus = () => {
    dispath({
      type: "DECREASE",
      data: 1,
    });
  }
  return <div>
    <h1>{state}</h1>
    <button onClick={onClickPlus}>+</button>
    <button onClick={onClickMinus}>-</button>
  </div>
}

export default Exam