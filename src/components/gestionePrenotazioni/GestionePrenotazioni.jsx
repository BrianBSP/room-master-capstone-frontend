import { useEffect, useState } from "react";
import { Button, Card, Container, Form, InputGroup, ListGroup } from "react-bootstrap";
import { ArrowLeft, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  cercaPrenotazioniAction,
  getAllPrenotazioniAction,
  getPrenotazioniAnnoAction,
} from "../../redux/actions/prenotazioniAction";

const GestionePrenotazioni = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const [parola, setParola] = useState("");
  const [anno, setAnno] = useState("");

  const { cercaPrenotazioni, cercaLoading, cercaError } = useSelector((state) => state.cercaPrenotazioni);
  const { prenotazioni, loading, error, links, page } = useSelector((state) => state.prenotazioniAll);
  console.log(cercaPrenotazioni);
  console.log(prenotazioni);

  const handleCercaPrenotazione = (e) => {
    e.preventDefault();
    dispatch(cercaPrenotazioniAction(parola));
  };

  const handleListaPrenotazioni = () => {
    dispatch(getAllPrenotazioniAction());
  };

  const handlePrecedentePagina = () => {
    if (links.prev) {
      dispatch(getAllPrenotazioniAction(links.prev.href));
    }
  };

  const handleProssimaPagina = () => {
    if (links.next) {
      dispatch(getAllPrenotazioniAction(links.next.href));
    }
  };

  useEffect(() => {
    if (anno) {
      dispatch(getPrenotazioniAnnoAction(anno));
    }
  }, [dispatch, anno]);

  const handleClickPrenotazione = (prenotazioneId) => {
    navigate(`/prenotazioni/${prenotazioneId}`);
  };

  return (
    <Container className="gestione-utenti-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">Gestione Prenotazioni</h2>
      </div>
      <div className="d-flex justify-content-between">
        <div className="indietro-button">
          <Button variant="secondary" onClick={handleIndietro}>
            <ArrowLeft /> Torna Indietro
          </Button>
        </div>
        <div className="input-search-utente">
          <Form onSubmit={handleCercaPrenotazione} className="d-flex align-items-center">
            <InputGroup className="mb-3">
              <InputGroup.Text id="cercaUtenti">
                <Search />
              </InputGroup.Text>
              <Form.Control
                value={parola}
                onChange={(e) => setParola(e.target.value)}
                placeholder="Cerca Prenotazione"
                aria-label="cercaPrenotazioni"
                aria-describedby="cercaPrenotazioni"
              />
            </InputGroup>
            <Button type="submit" className="mb-3 ms-3">
              Cerca
            </Button>
          </Form>
        </div>
      </div>
      <Container className="card-dash-section">
        <Link className="text-decoration-none">
          <Card className="p-3" onClick={handleListaPrenotazioni}>
            <h5>Tutte le Prenotazioni</h5>
          </Card>
        </Link>
        <div>
          <Form.Group>
            <Form.Select value={anno} onChange={(e) => setAnno(e.target.value)} aria-label="Seleziona anno">
              <option>- Seleziona l&rsquo;anno -</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Container>
      <Container>
        {cercaLoading && <p>Caricamento in corso...</p>}
        {cercaError && <p className="text-danger error-section">{cercaError}</p>}
        {cercaPrenotazioni && cercaPrenotazioni.length > 0 && (
          <Card className="mt-4 p-4">
            <h5>Risultati della ricerca:</h5>
            <ListGroup>
              {cercaPrenotazioni.map((prenotazioneCercata) => (
                <ListGroup.Item
                  onClick={() => handleClickPrenotazione(prenotazioneCercata.id)}
                  key={prenotazioneCercata.id}
                  action
                  variant="light"
                >
                  <p>
                    Prenotazione di {prenotazioneCercata.utente.nome} {prenotazioneCercata.utente.cognome} con arrivo il{" "}
                    {prenotazioneCercata.arrivo}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        )}
        {prenotazioni && prenotazioni.length === 0 && !loading && (
          <p className="text-center mt-5">Nessuna preotazione trovata.</p>
        )}
        {loading && <p>Caricamento in corso...</p>}
        {error && <p className="text-danger">{error}</p>}
        {prenotazioni && prenotazioni.length > 0 && (
          <Card className="mt-4 p-4">
            <h5>Risultati:</h5>
            <ListGroup>
              {prenotazioni.map((prenotazione) => (
                <ListGroup.Item
                  onClick={() => handleClickPrenotazione(prenotazione.prenotazioneId)}
                  action
                  variant="light"
                  key={prenotazione.prenotazioneId}
                >
                  <p>
                    Prenotazione di {prenotazione.utente.nome} {prenotazione.utente.cognome} con arrivo il{" "}
                    {prenotazione.arrivo}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="text-center">
              <Button onClick={handlePrecedentePagina} disabled={!links.prev}>
                Precedente
              </Button>
              <span className="mx-3">
                {page.number + 1 || 1} di {page.totalPages || 1}
              </span>
              <Button onClick={handleProssimaPagina} disabled={!links.next}>
                Successivo
              </Button>
            </div>
          </Card>
        )}
      </Container>
    </Container>
  );
};

export default GestionePrenotazioni;
