import React, { useState } from "react";
import Inner from "./Inner";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
    setItems((prevItems) => [...prevItems, count]);
  };

  return (
    <div className="counter">
      <button onClick={handlePlus}>+</button>
      <div>
        {items.map((item, index) => (
          <Inner key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
