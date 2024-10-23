import { useState } from "react";
import { Button, Card, Container, Form, InputGroup, ListGroup } from "react-bootstrap";
import { ArrowLeft, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { camereAllAction } from "../../redux/actions/camereAction";

const GestioneCamere = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const [parola, setParola] = useState();

  const handleCercaCamere = () => {
    dispatch();
  };

  const handleListaCamere = () => {
    dispatch(camereAllAction());
  };
  const { camere, loading, error, links, page } = useSelector((state) => state.camereAll);
  console.log(camere);

  const handlePrecedentePagina = () => {
    if (links.prev) {
      dispatch(camereAllAction(links.prev.href));
    }
  };

  const handleProssimaPagina = () => {
    if (links.next) {
      dispatch(camereAllAction(links.next.href));
    }
  };

  const handleClickCamera = (cameraId) => {
    navigate(`/camere/${cameraId}`);
  };

  return (
    <Container className="gestione-utenti-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">Gestione Camere</h2>
      </div>
      <div className="d-flex justify-content-between">
        <div className="indietro-button">
          <Button variant="secondary" onClick={handleIndietro}>
            <ArrowLeft /> Torna Indietro
          </Button>
        </div>
        <div className="input-search-utente">
          <Form onSubmit={handleCercaCamere} className="d-flex align-items-center">
            <InputGroup className="mb-3">
              <InputGroup.Text id="cercaUtenti">
                <Search />
              </InputGroup.Text>
              <Form.Control
                value={parola}
                onChange={(e) => setParola(e.target.value)}
                placeholder="Cerca Camera"
                aria-label="cercaCamere"
                aria-describedby="cercaCamere"
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
          <Card className="p-3" onClick={handleListaCamere}>
            <h5>Tutte le Camere</h5>
          </Card>
        </Link>
        <Link className="text-decoration-none">
          <Card className="p-3" onClick={handleListaCamere}>
            <h5>Crea Nuova Camera</h5>
          </Card>
        </Link>
      </Container>
      <Container>
        {camere && camere.length === 0 && !loading && <p className="text-center mt-5">Nessun preventivo trovato</p>}
        {loading && <p>Caricamento in corso...</p>}
        {error && <p className="text-danger">{error}</p>}
        {camere && camere.length > 0 && (
          <Card className="mt-4 p-4">
            <h5 className="text-center">Risultati:</h5>
            <ListGroup>
              {camere.map((camera) => (
                <ListGroup.Item
                  action
                  variant="light"
                  onClick={() => handleClickCamera(camera.cameraId)}
                  key={camera.cameraId}
                >
                  Camera: {camera.numeroCamera}
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
export default GestioneCamere;
