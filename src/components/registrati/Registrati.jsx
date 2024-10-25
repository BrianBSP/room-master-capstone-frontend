import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registraAction } from "../../redux/actions/registraAction";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const Registrati = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegistra = async (e) => {
    e.preventDefault();
    const utente = { nome, cognome, email, password };
    dispatch(registraAction(utente));
    navigate("/login");
  };

  const handleIndietro = () => {
    navigate("/login");
  };

  return (
    <Container className="registra-section">
      <div>
        <h2 className="bg-titoli pb-3 rounded-3">Effettua la REGISTRAZIONE</h2>
      </div>
      <div className="indietro-button">
        <Button variant="secondary" onClick={handleIndietro}>
          <ArrowLeft /> Torna Indietro
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleRegistra} className="form-section">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il tuo nome..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cognome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il tuo cognome..."
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci qui la tua Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">Non utilizzeremo da nessun&rsquo;altra parte la tua email.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Inserisci qui la tua Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Rimani collegato" className="check-section" />
          </Form.Group>
          <Button type="submit">Registrati</Button>
        </Form>
      </div>
    </Container>
  );
};
export default Registrati;
