import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const DashAdmin = () => {
  return (
    <Container className="dash-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">Dashboard ADMIN</h2>
      </div>
      <Container>
        <Link to="/gestione-utenti">
          <div>
            <h4>Gestione Utenti</h4>
          </div>
        </Link>
        {/* <Link to="/gestione-preventivi">
          <div>
            <h4>Gestione Preventivi</h4>
          </div>
        </Link>
        <Link to="/gestione-prenotazioni">
          <div>
            <h4>Gestione Prenotazioni</h4>
          </div>
        </Link>
        <Link to="/gestione-camere">
          <div>
            <h4>Gestione Camere</h4>
          </div>
        </Link> */}
      </Container>
    </Container>
  );
};
export default DashAdmin;
