import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Servizi from "./components/servizi/Servizi.jsx";
import Carosello from "./components/carosello/Carosello.jsx";
import MyFooter from "./components/footer/MyFooter.jsx";
import Contatti from "./components/contatti/Contatti.jsx";
import MyNav from "./components/navbar/MyNav.jsx";
import Login from "./components/login/Login.jsx";
import Registrati from "./components/registrati/Registrati.jsx";
import DashUtente from "./components/dashboardUtente/DashUtente.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import ListaPreventiviUtente from "./components/listaPreventiviUtente/ListaPreventiviUtente.jsx";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrati />} />
        <Route path="/dashboard" element={<DashUtente />} />
        <Route path="/preventivi" element={<ListaPreventiviUtente />} />
        {/* <Route path="/preventivi/:preventivoId" element={< />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
