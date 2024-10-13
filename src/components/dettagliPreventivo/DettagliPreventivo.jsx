import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  accettaPreventivoAction,
  preventivoByIdAction,
  updatePreventivoAction,
} from "../../redux/actions/preventiviAction";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

const DettagliPreventivo = () => {
  const { preventivoId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { preventivo, loading, error } = useSelector((state) => state.dettaglioPreventivo);
  const [showModal, setShowModal] = useState(false);
  const [arrivo, setArrivo] = useState("");
  const [partenza, setPartenza] = useState("");
  const [tipoCamera, setTipoCamera] = useState("");
  const [tipoServizio, setTipoServizio] = useState("");
  const [adulti, setAdulti] = useState("");
  const [bambini, setBambini] = useState("");

  useEffect(() => {
    dispatch(preventivoByIdAction(preventivoId));
  }, [dispatch, preventivoId]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleUpdatePreventivo = () => {
    dispatch(
      updatePreventivoAction({
        ...preventivo,
        arrivo: arrivo,
        partenza: partenza,
        tipoCamera: tipoCamera,
        tipoServizio: tipoServizio,
        adulti: adulti,
        bambini: bambini,
      })
    );
    setShowModal(false);
  };

  const handleAccettaPreventivo = (preventivoId) => {
    dispatch(accettaPreventivoAction(preventivoId));
  };

  const handleIndietro = () => {
    navigate("/preventivi");
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
                  Dettagli del Preventivo di {/* {preventivo.utenteId.nome} {preventivo.utenteId.cognome} */}
                </Card.Title>
                <Card.Text>
                  <p>Data di richiesta: {preventivo.data}</p>
                  <p>Arrivo: {preventivo.arrivo}</p>
                  <p>Partenza: {preventivo.partenza}</p>
                  <p>Tipo di Camera: {preventivo.tipoCamera}</p>
                  <p>Tipo di Servizio: {preventivo.tipoServizio}</p>
                  <p>Numero di adulti: {preventivo.numeroAdulti}</p>
                  <p>Numero di bambini: {preventivo.numeroBambini}</p>
                  <p>Prezzo: € {preventivo.totalePrezzoPreventivo}</p>
                </Card.Text>

                {!preventivo.accettato && (
                  <Button variant="success" onClick={handleAccettaPreventivo}>
                    Accetta
                  </Button>
                )}

                <Button className="ms-3" variant="primary" onClick={handleShowModal}>
                  Modifica
                </Button>

                <Modal size="lg" show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica Preventivo</Modal.Title>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formArrivo">
                          <Form.Label>Arrivo</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Inserisci qui la data di arrivo"
                            value={arrivo}
                            onChange={(e) => setArrivo(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPartenza">
                          <Form.Label>Partenza</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Inserisci qui la data di partenza"
                            value={partenza}
                            onChange={(e) => setPartenza(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Select
                          aria-label="Seleziona Tipo Camera"
                          value={tipoCamera}
                          onChange={(e) => setTipoCamera(e.target.value)}
                        >
                          <option>- Seleziona il tipo di camera -</option>
                          <option value="FAMILY_ROOM">Family Room</option>
                          <option value="STANDARD">Standard</option>
                          <option value="SUITE">Suite</option>
                        </Form.Select>
                        <Form.Select
                          aria-label="Seleziona Tipo Servizio"
                          value={tipoServizio}
                          onChange={(e) => setTipoServizio(e.target.value)}
                        >
                          <option>- Seleziona il tipo di servizio -</option>
                          <option value="ALL_INCLUSIVE">All Inclusive</option>
                          <option value="PENSIONE_COMPLETA">Pensione Completa</option>
                          <option value="MEZZA_PENSIONE">Mezza Pensione</option>
                          <option value="BAD_BREAKFAST">Bad & Breakfast</option>
                        </Form.Select>
                        <Form.Select
                          aria-label="Seleziona Numero Adulti"
                          value={adulti}
                          onChange={(e) => setAdulti(e.target.value)}
                        >
                          <option>- Seleziona il numero di adulti -</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                        </Form.Select>
                        <Form.Select
                          aria-label="Seleziona Numero Bambini"
                          value={bambini}
                          onChange={(e) => setBambini(e.target.value)}
                        >
                          <option>- Seleziona il numero di bambini -</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                        </Form.Select>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>
                        Chiudi
                      </Button>
                      <Button variant="prymary" onClick={handleUpdatePreventivo}>
                        Salva Modifiche
                      </Button>
                    </Modal.Footer>
                  </Modal.Header>
                </Modal>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};

export default DettagliPreventivo;
