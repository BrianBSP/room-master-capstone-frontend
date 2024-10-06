import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import Servizi from "./components/Servizi";
import Carosello from "./components/Carosello";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <AboutUs />
        <Servizi />
        <Carosello />
        <MyFooter />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
