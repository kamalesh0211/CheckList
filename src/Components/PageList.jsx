/* eslint-disable */

const PageList = ({ items, onDeleteItems }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item item={item} key={item.id}  onDeleteItems={onDeleteItems}/>
      ))}
    </ul>
  );
};
function Item({ item, onDeleteItems }) {
  return (
    <section className="main-list">
      {" "}
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>
          {item.quantity}
          {item.description}
        </span>
        <button type="button" onClick={onDeleteItems}>
          X
        </button>
      </li>
    </section>
  );
}

export default PageList;
