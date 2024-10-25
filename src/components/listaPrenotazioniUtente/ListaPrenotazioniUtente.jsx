import { useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { prenotazioniAction } from "../../redux/actions/prenotazioniAction";
import { ArrowLeft } from "react-bootstrap-icons";

const ListaPrenotazioniUtente = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { prenotazioni, loading, error } = useSelector((state) => state.prenotazioni);

  useEffect(() => {
    dispatch(prenotazioniAction());
  }, [dispatch]);

  console.log(prenotazioni);

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const handleClickPrenotazione = (prenotazioneId) => {
    navigate(`/prenotazioni/${prenotazioneId}`);
  };

  return (
    <Container className="lista-preventivi-section">
      <h2 className="bg-titoli pb-3 rounded-3">Le tue prenotazioni: </h2>
      <div className="list-section">
        {loading && <p>Caricamento in corso...</p>}
        {error && <p>{error}</p>}
        {prenotazioni.length === 0 && !loading && <p>Nessuna prenotazione trovata.</p>}
        <div className="indietro-button">
          <Button variant="secondary" onClick={handleIndietro}>
            <ArrowLeft /> Torna Indietro
          </Button>
        </div>
        <ListGroup>
          {prenotazioni.map((prenotazione) => (
            <ListGroup.Item
              action
              variant="light"
              key={prenotazione.id}
              onClick={() => handleClickPrenotazione(prenotazione.id)}
            >
              Data di ARRIVO: {prenotazione.arrivo} - Data di PARTENZA: {prenotazione.partenza} €{" "}
              {prenotazione.totalePrezzo}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};
export default ListaPrenotazioniUtente;
