import { useState } from "react";

function Input() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function Add(event) {
    event.preventDefault();
    setItems([
      ...items,
      {
        name: item,
      },
    ]);
    setItem("");
  }
 
  const deleteItem = (index) => () =>
    setItems((items) => items.filter((_, i) => i !== index));
  return (
    <>
    
      <form onSubmit={Add}>
        <input
          name="item"
          type="text"
          value={item}
          onChange={(item) => setItem(item.target.value)}
        />
        <button onClick={Add}>Add</button>
      </form>
      
      <ul>
     
        {items.map((it, index) => {
        return (
          <div key={it.id}>
            <ol>
              <li>
              {it.name} <button onClick={deleteItem(index)}>-</button>
              </li>
            </ol>
          </div>
        );
      })}
        
 
      </ul>
    </>
  );
}

export default Input;