/* eslint-disable */


const PageList = ({items}) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};
function Item({ item }) {
  return (
    <section className="main-list">
      {" "}
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>
          {item.quantity}
          {item.description}
        </span>
      </li>
      <button>X</button>
    </section>
  );
}

export default PageList;
