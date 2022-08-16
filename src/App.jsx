import "./App.css";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Sliders from "./components/Sliders";
import HautFooter from "./components/HautFooter";
import BasFooter from "./components/BasFooter";


function App() {
  return (
    <div className="App">
      <Nav />
      <Categories />
      <Sliders />
      <HautFooter />
     <BasFooter />
    </div>
  );
}

export default App;
