import "./App.css";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Sliders from "./components/Sliders";
import HautFooter from "./components/HautFooter";
import BasFooter from "./components/BasFooter";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import NotFound from "./pages/NotFound";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="connexion" element={<Connexion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Categories />
      <Sliders />
      <HautFooter />
      <BasFooter />
    </div>
  );
}

export default App;
