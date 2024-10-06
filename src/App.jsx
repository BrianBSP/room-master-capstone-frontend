import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import Servizi from "./components/Servizi";
import Carosello from "./components/Carosello";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <AboutUs />
        <Servizi />
        <Carosello />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
