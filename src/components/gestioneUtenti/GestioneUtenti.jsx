import { Button, Card, Container } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const GestioneUtenti = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIndietro = () => {
    navigate("/dashboard");
  };

  return (
    <Container className="gestione-utenti-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">Gestione Utenti</h2>
      </div>
      <div className="indietro-button">
        <Button variant="secondary" onClick={handleIndietro}>
          <ArrowLeft /> Torna Indietro
        </Button>
      </div>
      <Container>
        <Card>
          <h4 className="bg-body-tertiary pb-3 rounded-3">Sceglli un&rsquo;opzione</h4>
          <div>
            <Button>Lista degli Utenti</Button>
          </div>
        </Card>
      </Container>
    </Container>
  );
};
export default GestioneUtenti;
