import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container id="home" className="home-section">
        <h1 className="pb-3 rounded-3 bg-titoli">
          <span className="fs-1">Benvenuti in</span> <br />
          ROOM MASTER
        </h1>

        <div className="d-flex align-items-center">
          <img src="../public/logo-room-master.svg" alt="hotel" width={300} />
          <div className="ms-5">
            <h2 className="mb-4">La tua chiave per un soggiorno perfetto</h2>
            <p>
              Trova la stanza ideale per le tue vacanze o viaggi di lavoro con un semplice clic. Offriamo un’esperienza
              di prenotazione facile e veloce, con un&rsquo;ampia scelta di camere per ogni esigenza e budget. Prenota
              ora e scopri il comfort, <br />
              la convenienza e l’ospitalità su misura per te!
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
