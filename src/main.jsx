import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/css/Home.css";
import "../src/css/MyNav.css";
import "../src/css/AboutUs.css";
import "../src/css/Servizi.css";
import "../src/css/Carosello.css";
import "../src/css/MyFooter.css";
import "../src/css/Contatti.css";
import "../src/css/Login.css";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
