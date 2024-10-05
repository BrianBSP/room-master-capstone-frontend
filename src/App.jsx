import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <AboutUs />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
