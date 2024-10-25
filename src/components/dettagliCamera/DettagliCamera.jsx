import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cameraByIdAction, eliminaCameraAction, updateCameraAction } from "../../redux/actions/camereAction";
import { ArrowLeft } from "react-bootstrap-icons";
import { HOTEL_SELEZIONATO } from "../../redux/actions/hotelsAction";

const DettagliCamera = () => {
  const { cameraId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cameraByIdAction(cameraId));
  }, [dispatch, cameraId]);

  const { camera, loading, error } = useSelector((state) => state.cameraDettaglio);

  console.log(camera);

  const handleIndietro = () => {
    navigate("/gestione-camere");
  };

  const handleEliminaCamera = () => {
    dispatch(eliminaCameraAction(camera.id));
    navigate("/gestione-camere");
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [numeroCamera, setNumeroCamera] = useState("");
  const [capienzaCamera, setCapienzaCamera] = useState("");
  const [tipoCamera, setTipoCamera] = useState("");
  const [statoCamera, setStatoCamera] = useState("");

  const { hotel } = useSelector((state) => state.hotelDettaglio);
  const [hotelSelStato, setHotelSelStato] = useState("");

  useEffect(() => {
    if (camera) {
      setNumeroCamera(camera.numeroCamera || "");
      setCapienzaCamera(camera.capienzaCamera || "");
      setTipoCamera(camera.tipoCamera || "");
      setStatoCamera(camera.statoCamera || "");
      setHotelSelStato(camera.hotel || "");
    }
  }, [camera]);

  const handleUpdateCamera = () => {
    dispatch(
      updateCameraAction({
        ...camera,
        numeroCamera: numeroCamera,
        capienzaCamera: capienzaCamera,
        tipoCamera: tipoCamera,
        statoCamera: statoCamera,
      })
    );
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
                <Card.Title>Camera numero {camera.numeroCamera}</Card.Title>
                <Card.Text className="mt-4">
                  <p>Capienza: {camera.capienzaCamera}</p>
                  <p>Tipo di Camera: {camera.tipoCamera}</p>
                  <p>Stato della Camera: {camera.statoCamera}</p>
                  {/* <p>Hotel: {camera.hotel.nome}</p> */}
                </Card.Text>
                <Button className="ms-3" variant="primary" onClick={handleShowModal}>
                  Modifica
                </Button>
                <Modal size="lg" show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica Camera</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formNumeroCamera">
                        <Form.Label>Numero Camera</Form.Label>
                        <Form.Control
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
                    <Button variant="primary" onClick={handleUpdateCamera}>
                      Salva
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Button className="ms-3" variant="danger" onClick={handleEliminaCamera}>
                  Cancella Camera
                </Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};
export default DettagliCamera;
