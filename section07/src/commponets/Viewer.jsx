import { useState } from "react";

const Viewer = ({ counter, counterSet }) => {


  return (
    <div>
      <div>현재 카운트 :</div>
      <h1>{counter}</h1>
    </div>
  );
}

export default Viewer;