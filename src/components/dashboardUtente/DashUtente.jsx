import { Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const DashUtente = () => {
  const autenticato = localStorage.getItem("accessToken");
  const utente = JSON.parse(localStorage.getItem("utente"));
  const ruolo = utente.ruoloUtente;

  if (!autenticato) {
    return <Navigate to="/login" />;
  }

  if (ruolo === "ADMIN") {
    return (
      <Container className="dash-section">
        <div>
          <h2 className="bg-body-tertiary pb-3 rounded-3">Dashboard ADMIN</h2>
        </div>
        <Container>
          <Link to="/gestione-utenti">
            <Card>
              <h4>Gestione Utenti</h4>
            </Card>
          </Link>
          <Link to="/gestione-preventivi">
            <Card>
              <h4>Gestione Preventivi</h4>
            </Card>
          </Link>
          <Link>
            <Card>
              <h4>Gestione Prenotazioni</h4>
            </Card>
          </Link>
          <Link>
            <Card>
              <h4>Gestione Camere</h4>
            </Card>
          </Link>
        </Container>
      </Container>
    );
  }
  return (
    <Container className="dash-section">
      <h2 className="bg-body-tertiary pb-3 rounded-3">La tua DASHBOARD</h2>

      <Container className="card-dash-section">
        <Link className="text-decoration-none" to="/preventivi">
          <Card className="p-3">
            <h5>I tuoi preventivi</h5>
          </Card>
        </Link>
        <Link className="text-decoration-none" to="/prenotazioni">
          <Card className="p-3">
            <h5>Le tue prenotazioni</h5>
          </Card>
        </Link>
        <Link className="text-decoration-none" to="/richiesta-preventivo">
          <Card className="p-3">
            <h5>Richiedi un preventivo</h5>
          </Card>
        </Link>
      </Container>
    </Container>
  );
};
export default DashUtente;
