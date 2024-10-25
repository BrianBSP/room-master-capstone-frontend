import { useEffect, useState } from "react";
import { Button, Card, Container, Form, InputGroup, ListGroup } from "react-bootstrap";
import { ArrowLeft, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  cercaPreventiviAction,
  getAllAccettati,
  getAllPreventiviAction,
  getPreventiviAnnoAction,
} from "../../redux/actions/preventiviAction";

const GestionePreventivi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const [parola, setParola] = useState("");
  const [anno, setAnno] = useState("");
  const { cercaPreventivi, cercaLoading, cercaError } = useSelector((state) => state.cercaPreventivi);
  const { preventivi, loading, error, links, page } = useSelector((state) => state.preventiviAll);

  const handleCercaPreventivi = (e) => {
    e.preventDefault();
    console.log(parola);

    dispatch(cercaPreventiviAction(parola));
  };

  const handleListaPreventivi = () => {
    dispatch(getAllPreventiviAction());
  };

  const handleListaPreventiviAccettati = () => {
    dispatch(getAllAccettati());
  };

  console.log(cercaPreventivi);
  console.log(preventivi);

  const handlePrecedentePagina = () => {
    if (links.prev) {
      dispatch(getAllPreventiviAction(links.prev.href));
    }
  };

  const handleProssimaPagina = () => {
    if (links.next) {
      dispatch(getAllPreventiviAction(links.next.href));
    }
  };

  const handleClickPreventivo = (preventivoId) => {
    navigate(`/preventivi/${preventivoId}`);
  };

  useEffect(() => {
    if (anno) {
      dispatch(getPreventiviAnnoAction(anno));
    }
  }, [dispatch, anno]);

  return (
    <Container className="gestione-utenti-section">
      <div>
        <h2 className="bg-titoli pb-3 rounded-3">Gestione Preventivi</h2>
      </div>
      <div className="d-flex justify-content-between">
        <div className="indietro-button">
          <Button variant="secondary" onClick={handleIndietro}>
            <ArrowLeft /> Torna Indietro
          </Button>
        </div>
        <div className="input-search-utente">
          <Form onSubmit={handleCercaPreventivi} className="d-flex align-items-center">
            <InputGroup className="mb-3">
              <InputGroup.Text id="cercaUtenti">
                <Search />
              </InputGroup.Text>
              <Form.Control
                value={parola}
                onChange={(e) => setParola(e.target.value)}
                placeholder="Cerca Preventivo"
                aria-label="cercaPreventivi"
                aria-describedby="cercaPreventivi"
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
          <Card className="p-3" onClick={handleListaPreventivi}>
            <h5>Tutti i Preventivi</h5>
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
        <Link className="text-decoration-none">
          <Card className="p-3" onClick={handleListaPreventiviAccettati}>
            <h5>Preventivi Accettati</h5>
          </Card>
        </Link>
      </Container>
      <Container>
        {cercaLoading && <p>Caricamento in corso...</p>}
        {cercaError && <p className="text-danger error-section">{cercaError}</p>}
        {cercaPreventivi && cercaPreventivi.length > 0 && (
          <Card className="mt-4 p-4">
            <h5>Risultati della ricerca:</h5>
            <ListGroup>
              {cercaPreventivi.map((preventivoCercato) => (
                <ListGroup.Item
                  onClick={() => handleClickPreventivo(preventivoCercato.id)}
                  key={preventivoCercato.id}
                  action
                  variant="light"
                >
                  <p>
                    Preventivo richiesto il: {preventivoCercato.data} da {preventivoCercato.utente.nome}{" "}
                    {preventivoCercato.utente.cognome}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        )}
        {preventivi && preventivi.length === 0 && !loading && (
          <p className="text-center mt-5">Nessun preventivo trovato</p>
        )}
        {loading && <p>Caricamento in corso...</p>}
        {error && <p className="text-danger">{error}</p>}
        {preventivi && preventivi.length > 0 && (
          <Card className="mt-4 p-4">
            <h5>Risultati:</h5>
            <ListGroup>
              {preventivi.map((preventivo) => (
                <ListGroup.Item
                  onClick={() => handleClickPreventivo(preventivo.preventivoId)}
                  key={preventivo.preventivoId}
                  action
                  variant="light"
                >
                  <p>
                    Preventivo richiesto il: {preventivo.data} da {preventivo.utente.nome} {preventivo.utente.cognome}
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

export default GestionePreventivi;
