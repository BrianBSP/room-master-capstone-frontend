import { Container } from "react-bootstrap";

const Servizi = () => {
  return (
    <Container className="myServizi">
      <h2 className="bg-body-tertiary pb-3 rounded-3">Servizi su Misura</h2>
      <p>
        Oltre a camere confortevoli, offriamo una gamma di servizi esclusivi pensati per soddisfare le esigenze di ogni
        ospite: dalla colazione gourmet preparata con ingredienti freschi e locali, alle aree relax, senza dimenticare
        il nostro team sempre a disposizione per consigli su cosa visitare in città o per organizzare al meglio il
        vostro soggiorno.
      </p>

      <h3>Tra i nostri servizi, troverete anche:</h3>
      <p>
        <ul>
          <li>Wi-Fi ad alta velocità gratuito in tutte le aree, per permettervi di rimanere sempre connessi.</li>
          <li>Navetta privata da e per l’aeroporto, per un arrivo e una partenza senza stress. </li>
          <li>Servizio in camera su richiesta, per gustare la nostra cucina nel comfort della vostra stanza. </li>
          <li>
            Spazi per riunioni e conferenze completamente attrezzati, ideali per chi viaggia per affari e ha bisogno di
            una location perfetta per incontri o eventi.
          </li>
          <li>Area benessere, completa di sauna e trattamenti spa per rigenerare corpo e mente.</li>
          <li>
            Servizio concierge per organizzare tour, escursioni o prenotare ristoranti ed eventi speciali durante il
            vostro soggiorno.
          </li>
          <li>Noleggio biciclette per esplorare la città o la natura circostante in modo eco-friendly e divertente.</li>
        </ul>
        Il nostro obiettivo è quello di rendere il vostro soggiorno un’esperienza impeccabile, prendendoci cura di ogni
        aspetto, in modo che possiate rilassarvi e godervi ogni momento.
      </p>
    </Container>
  );
};

export default Servizi;
