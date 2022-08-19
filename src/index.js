import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Nav.css';
import './components/Sliders.css';
import './components/Categories.css';
import './components/HautFooter.css';
import './components/BasFooter.css';
import './pages/ContactForm.css';
import './pages/Form.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
