import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/home/Home.css";
import "./components/navbar/MyNav.css";
import "./components/aboutUs/AboutUs.css";
import "./components/servizi/Servizi.css";
import "./components/carosello/Carosello.css";
import "./components/footer/MyFooter.css";
import "./components/contatti/Contatti.css";
import "./components/login/Login.css";
import "./components/registrati/Registrati.css";
import "./components/dashboardUtente/DashUtente.css";
import "./components/notFound/NotFound.css";
import "./components/listaPreventiviUtente/ListaPreventiviUtente.css";
import "./components/dettagliPreventivo/DettagliPreventivo.css";
import "./components/RichiediPreventivo/RichiediPreventivo.css";

import { Provider } from "react-redux";
import store from "./redux/store/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
