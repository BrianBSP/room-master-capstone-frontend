import { useEffect } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { eliminaPrenotazioneAction, prenotazioniByIdAction } from "../../redux/actions/prenotazioniAction";
import { ArrowLeft } from "react-bootstrap-icons";

const DettagliPrenotazione = () => {
  const utenteLoggato = JSON.parse(localStorage.getItem("utente"));
  const sonoAdmin = utenteLoggato && utenteLoggato.ruoloUtente === "ADMIN";
  const { prenotazioneId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(prenotazioniByIdAction(prenotazioneId));
  }, [dispatch, prenotazioneId]);

  console.log(prenotazioneId);

  const { prenotazione, loading, error } = useSelector((state) => state.dettaglioPrenotazione);
  console.log(prenotazione);

  const handleIndietro = () => {
    if (sonoAdmin) {
      navigate("/gestione-prenotazioni");
    } else {
      navigate("/prenotazioni");
    }
  };

  const handleModifica = () => {
    navigate(`/preventivi/${prenotazione.preventivo.id}`);
  };

  const handleEliminaPrenotazione = () => {
    dispatch(eliminaPrenotazioneAction(prenotazione.id));
    navigate("/prenotazioni");
  };

  const handleClickCamera = () => {
    dispatch();
  };
  return (
    <Container className="dettaglio-preventivo-section">
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
                <Card.Title>
                  Dettagli della Prenotazione di {prenotazione?.utente?.nome + " " + prenotazione?.utente?.cognome}{" "}
                </Card.Title>
                <Card.Text className="mt-4">
                  <p>Arrivo: {prenotazione.arrivo}</p>
                  <p>Partenza: {prenotazione.partenza}</p>
                  <p>Prezzo: € {prenotazione.totalePrezzo}</p>
                  {sonoAdmin && (
                    <ListGroup>
                      {prenotazione?.camere?.map((camera) => (
                        <ListGroup.Item
                          onClick={() => handleClickCamera(camera.id)}
                          action
                          variant="light"
                          key={camera.id}
                        >
                          Numero Camera: {camera.numeroCamera}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </Card.Text>
                <Button className="ms-3" variant="primary" onClick={handleModifica}>
                  Modifica
                </Button>
                <Button className="ms-3" variant="danger" onClick={handleEliminaPrenotazione}>
                  {/* elimina */}
                  Cancella Prenotazione
                </Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};

export default DettagliPrenotazione;
