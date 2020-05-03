import React, { useState } from "react";

function App() {
  const [item, setNewItem] = useState([]);
  const [newItem, setItem] = useState("");

  function handleChange(event) {
    const temp = event.target.value;
    setItem(temp);
  }

  function handleAdd(event)
  {
    setNewItem(prevVal => {
      return [
        ...prevVal,
        newItem
      ]

    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map(item => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
