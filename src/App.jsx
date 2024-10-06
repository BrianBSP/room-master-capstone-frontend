import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import Servizi from "./components/Servizi";
import Carosello from "./components/Carosello";
import MyFooter from "./components/MyFooter";
import Contatti from "./components/Contatti";
import MyNav from "./components/MyNav";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
              <Servizi />
              <Carosello />
            </>
          }
        />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
