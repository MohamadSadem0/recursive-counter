import React, { useState } from "react";
import Inner from "./Inner";

const Counter = ({ path = [], onAddChild, onDelete }) => {
  const [items, setItems] = useState([]);

  const handlePlus = () => {
    setItems((prevItems) => [...prevItems, items.length]);
  };

  const handleDelete = (pathToDelete) => {
    setItems((prevItems) =>
      prevItems.filter((item, index) => !pathToDelete.includes(index))
    );
  };

  const handleAddChild = (pathToAddChild) => {
    setItems((prevItems) => [...prevItems, prevItems.length]);
  };

  return (
    <div className="counter">
      <button onClick={handlePlus}>+</button>
      <div>
        {items.map((item, index) => (
          <Inner
            key={index}
            item={item}
            path={[...path, index]}
            onDelete={handleDelete}
            onAddChild={handleAddChild}
          />
        ))}
      </div>
    </div>
  );
};

export default Counter;


