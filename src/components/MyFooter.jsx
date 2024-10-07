import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2024 ROOM MASTER. Tutti i diritti riservati.</p>
          <p>Indirizzo: Via Del Mare 123, Cattolica, Italia</p>
          <p>Email: info@room.master.com | Telefono: +39 320 955 1234</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
