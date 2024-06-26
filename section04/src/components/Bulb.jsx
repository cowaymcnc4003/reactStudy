import { useState } from 'react'

export const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  const handleClick = () => {
    setLight(light === 'ON' ? "OFF" : "ON");
  };
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button onClick={handleClick} >+</button>
    </div>);
}
