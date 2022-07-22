import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sliders from "./components/Sliders";
import HautFooter from "./components/HautFooter";
import BasFooter from "./components/BasFooter";
function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Sliders />
      <HautFooter />
     <BasFooter />
    </div>
  );
}

export default App;
