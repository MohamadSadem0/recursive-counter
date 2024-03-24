import React, { useState } from "react";

const Inner = ({ item }) => {
  const [number, setNumber] = useState(item);
  const [show, setShow] = useState(true);

  const handlePlus = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleMinus = () => {
    setShow(false);
  };

  return (
    <div className={`inner ${show ? "" : "hide"}`}>
      <span>-</span>
      {number}
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

export default Inner;
