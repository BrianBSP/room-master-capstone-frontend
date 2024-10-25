import { useEffect, useState } from "react";
import { Button, Card, Container, Form, InputGroup, ListGroup, Modal } from "react-bootstrap";
import { ArrowLeft, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { camereAllAction, creaCameraAction } from "../../redux/actions/camereAction";
import { HOTEL_SELEZIONATO, hotelByIdAction } from "../../redux/actions/hotelsAction";

const GestioneCamere = () => {
  const [numeroCamera, setNumeroCamera] = useState("");
  const [capienzaCamera, setCapienzaCamera] = useState("");
  const [tipoCamera, setTipoCamera] = useState("");
  const [statoCamera, setStatoCamera] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const { hotelSelezionato } = useSelector((state) => state.hotels);
  console.log(hotelSelezionato);

  const handleCreaCamera = (e) => {
    e.preventDefault();
    const nuovaCamera = { numeroCamera, capienzaCamera, tipoCamera, statoCamera };
    dispatch(creaCameraAction(nuovaCamera, hotelSelezionato));
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(hotelByIdAction(hotelSelezionato));
  }, [dispatch, hotelSelezionato]);

  const { hotel } = useSelector((state) => state.hotelDettaglio);
  const [hotelSelStato, setHotelSelStato] = useState("");
  console.log(hotel);

  return (
    <Container className="gestione-utenti-section">
      <div>
        <h2 className="bg-titoli pb-3 rounded-3">Gestione Camere</h2>
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
          <Card className="p-3" onClick={handleShowModal}>
            <h5>Crea Nuova Camera</h5>
          </Card>
        </Link>
        <Modal size="lg" show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Crea una Nuova Camera</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="numeroCamera">
                <Form.Label>Numero della Camera:</Form.Label>
                <Form.Control
                  required
                  value={numeroCamera}
                  onChange={(e) => setNumeroCamera(e.target.value)}
                  type="number"
                  min={0}
                  placeholder="Inserisci qui il numero della Camera..."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="capienzaCamera">
                <Form.Label>Capienza della Camera:</Form.Label>
                <Form.Control
                  required
                  value={capienzaCamera}
                  onChange={(e) => setCapienzaCamera(e.target.value)}
                  type="number"
                  min={0}
                  placeholder="Inserisci qui la capienza della Camera..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tipo di Camera</Form.Label>
                <Form.Select
                  required
                  aria-label="Seleziona Tipo Camera"
                  value={tipoCamera}
                  onChange={(e) => setTipoCamera(e.target.value)}
                >
                  <option>- Seleziona il tipo di camera -</option>
                  <option value="FAMILY_ROOM">Family Room</option>
                  <option value="STANDARD">Standard</option>
                  <option value="SUITE">Suite</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Stato della Camera</Form.Label>
                <Form.Select
                  required
                  aria-label="Seleziona Stato Camera"
                  value={statoCamera}
                  onChange={(e) => setStatoCamera(e.target.value)}
                >
                  <option>- Seleziona lo stato della camera -</option>
                  <option value="DISPONIBILE">Disponibile</option>
                  <option value="OCCUPATA">Occupata</option>
                  <option value="IN_PREPARAZIONE">In preparazione</option>
                  <option value="FUORI_SERVIZIO">Fuori servizio</option>
                </Form.Select>
              </Form.Group>
              {/* dovrei inserire l'hotel */}
              <Form.Group>
                <Form.Label>Seleziona Hotel</Form.Label>
                <Form.Select
                  disabled
                  value={hotelSelStato}
                  onChange={(e) => setHotelSelStato(e.target.value)}
                  onClick={() => dispatch({ type: HOTEL_SELEZIONATO, payload: hotelSelStato })}
                >
                  <option value={hotel.id}>{hotel.nome}</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={handleCreaCamera}>
              Salva
            </Button>
          </Modal.Footer>
        </Modal>
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
