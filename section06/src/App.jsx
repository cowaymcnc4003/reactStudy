import Controller from "./commponets/Controller";
import Viewer from "./commponets/Viewer";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, counterSet] = useState(0);

  const conterOnClick = (value) => {
    counterSet(counter + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer counter={counter} ></Viewer>
      </section>
      <section>
        <Controller conterOnClick={conterOnClick}></Controller>
      </section>
    </div >
  )
}

export default App
