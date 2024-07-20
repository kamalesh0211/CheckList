import { initialItems } from "../App";

const Form = () => {
  const AddArray =()=>{

  }
  return (
    <form className="add-form" onSubmit={AddArray}>
      <h3>😇What you gonna take it</h3>
      <select id="select">
        {Array.from({ length: 20}, (_, i) => i + 1).map(
          (num) => (
            <option value={num} key={num}>
              {num}
            </option>
            
          )
        )}
      </select>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
