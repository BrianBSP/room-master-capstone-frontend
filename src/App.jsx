import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
