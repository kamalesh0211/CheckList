import Logo from "./Components/Logo";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import PageList from "./Components/PageList";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const HandleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const HandleDeleteItem = (items) => {
    items.filter(setItems((id) => items.id !== id));
  };
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={HandleAddItem} />
        <PageList items={items} onDeleteItems={HandleDeleteItem} />
        <Footer />
      </div>
    </>
  );
}

export default App;
