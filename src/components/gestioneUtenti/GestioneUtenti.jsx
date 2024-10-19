import { useState } from "react";
import { Button, Card, Container, Form, InputGroup, ListGroup } from "react-bootstrap";
import { ArrowLeft, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cercaUtentiAction, utentiAction } from "../../redux/actions/cercaUtentiAction";

const GestioneUtenti = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [parola, setParola] = useState("");
  const { cercaUtenti, cercaLoading, cercaError } = useSelector((state) => state.cercaUtenti);
  const { utenti, loading, error, links, page } = useSelector((state) => state.utenti);

  console.log(utenti);

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const handleCercaUtenti = (e) => {
    e.preventDefault();
    dispatch(cercaUtentiAction(parola));
  };

  const handleListaUtenti = () => {
    dispatch(utentiAction());
  };

  const handleProssimaPagina = () => {
    if (links.next) {
      dispatch(utentiAction(links.next.href));
    }
  };

  const handlePrecedentePagina = () => {
    if (links.prev) {
      dispatch(utentiAction(links.prev.href));
    }
  };

  const handleClickUtente = (utenteId) => {
    navigate(`/utenti/${utenteId}`);
  };

  return (
    <Container className="gestione-utenti-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">Gestione Utenti</h2>
      </div>
      <div className="d-flex justify-content-between">
        <div className="indietro-button">
          <Button variant="secondary" onClick={handleIndietro}>
            <ArrowLeft /> Torna Indietro
          </Button>
        </div>
        <div className="input-search-utente">
          <Form onSubmit={handleCercaUtenti} className="d-flex align-items-center">
            <InputGroup className="mb-3">
              <InputGroup.Text id="cercaUtenti">
                <Search />
              </InputGroup.Text>
              <Form.Control
                value={parola}
                onChange={(e) => setParola(e.target.value)}
                placeholder="Cerca Utente"
                aria-label="cercaUtenti"
                aria-describedby="cercaUtenti"
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
          <Card className="p-3" onClick={handleListaUtenti}>
            <h5>Tutti gli Utenti</h5>
          </Card>
        </Link>
      </Container>
      <Container>
        {cercaLoading && <p>Caricamento in corso...</p>}
        {cercaError && <p className="text-danger">{cercaError}</p>}
        {cercaUtenti && cercaUtenti.length > 0 && (
          <Card className="mt-4 p-4">
            <h5>Risultati della ricerca: </h5>
            <ListGroup>
              {cercaUtenti.map((utenteCercato) => (
                <ListGroup.Item
                  action
                  variant="light"
                  onClick={() => handleClickUtente(utenteCercato.id)}
                  key={utenteCercato.id}
                >
                  {utenteCercato.nome} {utenteCercato.cognome}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        )}
        {utenti && utenti.length === 0 && !loading && <p>Nessun utente trovato.</p>}
        {loading && <p>Caricamento in corso...</p>}
        {error && <p className="text-danger">{error}</p>}
        {utenti && utenti.length > 0 && (
          <Card className="mt-4 p-4">
            <h5>Risultati della ricerca: </h5>
            <ListGroup>
              {utenti.map((utente) => (
                <ListGroup.Item
                  action
                  variant="light"
                  onClick={() => handleClickUtente(utente.utenteId)}
                  key={utente.utenteId}
                >
                  {utente.nome} {utente.cognome}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="text-center">
              <Button onClick={handlePrecedentePagina} disabled={!links.prev}>
                Precedente
              </Button>
              <span className="mx-3">
                Pagina {page.number + 1 || 1} di {page.totalPages || 1}
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
export default GestioneUtenti;
