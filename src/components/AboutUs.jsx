import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="mt-5 myAboutUs">
      <h2 className="bg-body-tertiary pb-3 rounded-3">ABOUT US</h2>

      <div className="d-flex align-items-center">
        <div className="me-4">
          <p className="mt-5">
            Al Room Master, offriamo un&rsquo;oasi di comfort e stile nel cuore di Cattolica. La nostra missione è farvi
            vivere un&rsquo;esperienza unica, unendo eleganza e servizio personalizzato.
          </p>
          <h3>Ospitalità con Stile</h3>
          <p>
            Con 20 anni di esperienza, ci impegniamo a offrire un ambiente accogliente, ideale per chi cerca relax o
            viaggia per affari. Le nostre camere, arredate con cura, sono dotate di tutti i comfort moderni per
            garantirvi un soggiorno indimenticabile.
          </p>
          <h3>La nostra missione</h3>
          <p>Dedichiamo passione e attenzione a ogni dettaglio, per far sì che ogni ospite si senta speciale.</p>
        </div>
        <div className="receptionImg mt-4">
          <img src="../public/foto1.jpeg" alt="reception" />
        </div>
      </div>
    </Container>
  );
};
export default AboutUs;
