import { Container } from "react-bootstrap";
import MyNav from "./MyNav";

const Home = () => {
  return (
    <>
      <MyNav />

      <Container>
        <h1>Benvenuti in ROOM MASTER</h1>
        <h3>La tua chiave per un soggiorno perfetto</h3>
        <p>
          Trova la stanza ideale per le tue vacanze o viaggi di lavoro con un semplice clic. Offriamo un’esperienza di
          prenotazione facile e veloce, con un&rsquo;ampia scelta di camere per ogni esigenza e budget. Prenota ora e
          scopri il comfort, la convenienza e l’ospitalità su misura per te!
        </p>
      </Container>
    </>
  );
};

export default Home;
