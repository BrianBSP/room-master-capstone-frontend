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
import DettagliPreventivo from "./components/dettagliPreventivo/DettagliPreventivo.jsx";
import ListaPrenotazioniUtente from "./components/listaPrenotazioniUtente/ListaPrenotazioniUtente.jsx";
import DettagliPrenotazione from "./components/dettagliPrenotazione/DettagliPrenotazione.jsx";
import RichiediPreventivo from "./components/richiediPreventivo/RichiediPreventivo.jsx";
import MyProfile from "./components/profilo/MyProfile.jsx";
import GestioneUtenti from "./components/gestioneUtenti/GestioneUtenti.jsx";
import Utente from "./components/utente/Utente.jsx";

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
        <Route path="/preventivi/:preventivoId" element={<DettagliPreventivo />} />
        <Route path="/prenotazioni" element={<ListaPrenotazioniUtente />} />
        <Route path="/prenotazioni/:prenotazioneId" element={<DettagliPrenotazione />} />
        <Route path="/richiesta-preventivo" element={<RichiediPreventivo />} />
        <Route path="/profilo" element={<MyProfile />} />
        <Route path="/gestione-utenti" element={<GestioneUtenti />} />
        <Route path="/utenti/:utenteId" element={<Utente />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
