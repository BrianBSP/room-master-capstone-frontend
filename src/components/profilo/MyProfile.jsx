import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { ArrowLeft, BoxArrowRight } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/logoutAction";
import { useState } from "react";
import { uploadImageAction } from "../../redux/actions/uploadImageAction";

const MyProfile = () => {
  const utente = JSON.parse(localStorage.getItem("utente"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [fileSelezionato, setFileSelezionato] = useState(null);

  const handleCambiaFile = (e) => {
    setFileSelezionato(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", fileSelezionato);

    dispatch(uploadImageAction(formData));

    setShowModal(false);
  };

  if (!utente) {
    return (
      <Container className="myProfile-section">
        <div>
          <h2 className="bg-body-tertiary pb-3 rounded-3">PROFILO</h2>
        </div>
        <p className="text-center">Utente non trovato. Effettua il login per visualizzare il profilo.</p>
      </Container>
    );
  }
  return (
    <Container className="myProfile-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">PROFILO</h2>
      </div>
      <div className="d-flex justify-content-between indietro-button">
        <Button variant="secondary" onClick={handleIndietro}>
          <ArrowLeft /> Torna Indietro
        </Button>
        <Button variant="secondary" onClick={handleLogout}>
          <BoxArrowRight /> LOGOUT
        </Button>
      </div>

      <div>
        <Card>
          <div className="row">
            <div className="col-4 img-contain-profilo">
              <img src={utente.avatar} alt="avatar utente" onClick={handleShowModal} />
              <Modal size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Cambia Immagine del Profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formFile">
                      <Form.Label>Seleziona un&rsquo;immagine</Form.Label>
                      <Form.Control onChange={handleCambiaFile} type="file" accept="image/*" autoFocus />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleUpload}>
                    Salva Immagine
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="col-8 mt-5">
              <p>
                Nome: {utente.nome} {utente.cognome}
              </p>
              <p>Email: {utente.email}</p>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
};
export default MyProfile;
