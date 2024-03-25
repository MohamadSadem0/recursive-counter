import React, { useState } from "react";

const Inner = ({ item, path, onDelete, onAddChild }) => {
  const [number, setNumber] = useState(item);
  const [show, setShow] = useState(true);

  const handlePlus = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleMinus = () => {
    setShow(false);
    onDelete(path);
  };

  const handleAddChild = () => {
    onAddChild(path);
  };

  return (
    <div className={`inner ${show ? "" : "hide"}`}>
      <span>{path.join(" > ")}</span>
      {number}
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

export default Inner;
