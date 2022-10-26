import "./styles.css";
import { useState } from "react";

const Therealcount = () => {
  const [counter, SetCounter] = useState(0);

  const increase = () => {
    SetCounter(counter + 1);
  };

  const decrease = () => {
    SetCounter(counter - 1);
  };

  return (
    <div className="all">
      <div className="counter">Counter: {counter}</div>
      <button className="decrease" onClick={decrease}>Decrease Me!</button>
      <button className="increase" onClick={increase}>Increase Me!</button>
    </div>
  );
};

export default Therealcount;
