import { useState } from "react";
import classes from "./Input.module.css";

function Input() {

  
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function AddItem(event) {
    event.preventDefault();
    setItems([
      ...items,
      {
        name: item,
      },
    ]);
    setItem("");
  }

  return (
    <div className={classes.example}>
     
     <div className={classes.display}>
     <form onSubmit={AddItem}>
        <input className={classes.input} name="item" type="text" value={item}
          onChange={(item) => setItem(item.target.value)}
        />
      </form>
      <button className={classes.button} onClick={AddItem}>Add</button>
     </div>
      <ul>
        {items.map((item) => (
          <li>
            {item.name}
            <button className={classes.btn}>-</button>
          </li>
        
        ))}
      </ul>
    </div>
  );
}

export default Input;