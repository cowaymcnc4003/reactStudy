import Controller from "./commponets/Controller";
import Viewer from "./commponets/Viewer";
import Even from "./commponets/Even";
import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [counter, counterSet] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // useEffect 라이프 사이클 조절
  // 1.마운트
  useEffect(() => {
    console.log("mount");
  }, []);// des 의존성 배열

  // 2.업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) { // 마운트되고나서 하고 싶다.
      isMount.current = true;
      return;
    }
    console.log("update");
  });// des 의존성 배열

  // 3. 언마운트 : 죽음
  // useEffect(() => {
  //   console.log("update");
  // });// des 의존성 배열

  // useEffect(() => {
  //   console.log(`counter ${counter} / input : ${input}`);
  // }, [counter, input]);// des 의존성 배열

  const conterOnClick = (value) => {
    counterSet(counter + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer counter={counter} ></Viewer>
        {counter % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller conterOnClick={conterOnClick}></Controller>
      </section>
    </div >
  )
}

export default App
