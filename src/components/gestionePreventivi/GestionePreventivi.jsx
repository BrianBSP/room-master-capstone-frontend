import { useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { ArrowLeft, Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cercaPreventiviAction, getAllPreventiviAction } from "../../redux/actions/preventiviAction";

const GestionePreventivi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const [parola, setParola] = useState("");

  const handleCercaPreventivi = () => {
    dispatch(cercaPreventiviAction(parola));
  };

  const handleListaPreventivi = () => {
    dispatch(getAllPreventiviAction());
  };

  return (
    <Container className="gestione-utenti-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">Gestione Preventivi</h2>
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
      </Container>
    </Container>
  );
};

export default GestionePreventivi;
