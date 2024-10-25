import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { eliminaUtenteAction, updateUtenteAction, utenteByIdAction } from "../../redux/actions/cercaUtentiAction";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

const UtenteDettaglio = () => {
  const { utenteId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { utente, loading, error } = useSelector((state) => state.utenteSelezionato);
  console.log(utente);

  useEffect(() => {
    dispatch(utenteByIdAction(utenteId));
  }, [dispatch, utenteId]);

  const handleIndietro = () => {
    navigate("/gestione-utenti");
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  useEffect(() => {
    if (utente) {
      setNome(utente.nome || "");
      setCognome(utente.cognome || "");
    }
  }, [utente]);

  const handleUpdateUtente = () => {
    dispatch(
      updateUtenteAction({
        ...utente,
        nome: nome,
        cognome: cognome,
      })
    );
    setShowModal(false);
  };

  const handleEliminaUtente = () => {
    dispatch(eliminaUtenteAction(utente.id));
    navigate("/gestione-utenti");
  };
  return (
    <Container className="dettaglio-utente-section">
      <div>
        {loading ? (
          <p>Caricamento...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="prev-card-section">
            <div className="indietro-button">
              <Button onClick={handleIndietro}>
                <ArrowLeft /> Torna Indietro
              </Button>
            </div>
            <Card>
              <Card.Body>
                <Card.Title>Dettagli Utente</Card.Title>
                <div className="row">
                  <div className="col-4 img-contain-utente">
                    <img src={utente.avatar} alt="avatar" />
                  </div>
                  <div className="col-8 mt-2">
                    <p>Nome: {utente.nome}</p>
                    <p>Cognome: {utente.cognome}</p>
                    <p>Email: {utente.email}</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <Button className="me-4" onClick={handleShowModal}>
                  Modifica
                </Button>
                <Modal size="lg" show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica Utente</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Inserisci un nome..."
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formCognome">
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Inserisci un nome..."
                          value={cognome}
                          onChange={(e) => setCognome(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Chiudi
                    </Button>
                    <Button type="submit" onClick={handleUpdateUtente}>
                      Salva Modifiche
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button variant="danger" onClick={handleEliminaUtente}>
                  Elimina
                </Button>
              </Card.Footer>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};
export default UtenteDettaglio;
