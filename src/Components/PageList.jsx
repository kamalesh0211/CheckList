
import { initialItems } from "../App";

const PageList = () => {
  return <ul className="list">
  {initialItems.map(item=><Item item={item}/>)
  }
  </ul>;
};
function Item({item}){
  return <li>{item.description}</li>
}

export default PageList;
