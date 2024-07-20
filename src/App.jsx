import Logo from "./Components/Logo";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import PageList from "./Components/PageList";
import "./App.css";

export  const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PageList />
        <Footer />
      </div>
    </>
  );
}

export default App;
