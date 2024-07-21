
import { useState } from "react";

const Form = (onAddItems) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");
 

  const AddArray = (e) => {
    e.preventDefault(); // for preventing Default
    if (!description) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItems);

    //Initial State
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={AddArray}>
      <h3>😇What you gonna take it</h3>
      <select
        id="select"
        value={quantity} // insert value
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items....."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
