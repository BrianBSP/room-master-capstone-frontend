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
import Login from "./components/Login";

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
        <Route path="/auth/login" element={<Login />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
