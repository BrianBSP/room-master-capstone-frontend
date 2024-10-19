import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { utenteByIdAction } from "../../redux/actions/cercaUtentiAction";
import { Button, Card, Container } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

const UtenteDettaglio = () => {
  const { utenteId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(utenteId);

  const { utente, loading, error } = useSelector((state) => state.utenteSelezionato);

  useEffect(() => {
    dispatch(utenteByIdAction(utenteId));
  }, [dispatch, utenteId]);

  const handleIndietro = () => {
    navigate("/gestione-utenti");
  };
  return (
    <Container>
      <div>
        {loading ? (
          <p>Caricamento...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="prev-card-section">
            <div className="indietro-button">
              <Button variant="secondary" onClick={handleIndietro}>
                <ArrowLeft /> Torna Indietro
              </Button>
            </div>
            <Card>
              <Card.Body>
                <Card.Title>Dettagli Utente</Card.Title>
                <div className="mt-4">
                  <p>Nome: {utente.nome}</p>
                  <p>Cognome: {utente.cognome}</p>
                  <p>Email: {utente.email}</p>
                </div>
              </Card.Body>
              <Card.Footer>
                <Button>Modifica</Button>
                <Button>Elimina</Button>
              </Card.Footer>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};
export default UtenteDettaglio;
