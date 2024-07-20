/* eslint-disable */
import { initialItems } from "../App";


const PageList = () => {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};
function Item({ item }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span>
        {item.quantity}
        {item.description}
      </span>
    </li>
  );
}

export default PageList;
