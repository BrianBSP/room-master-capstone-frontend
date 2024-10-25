import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUtenteAction, loginAction } from "../../redux/actions/loginAction";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const utente = { email, password };

    dispatch(loginAction(utente));

    const autenticato = localStorage.getItem("accessToken");
    if (!autenticato) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }

    dispatch(getUtenteAction());
  };

  const handleIndietro = () => {
    navigate("/");
  };

  return (
    <Container className="login-section">
      <h2 className="bg-titoli pb-3 rounded-3">Effettua il LOGIN</h2>
      <div className="indietro-button">
        <Button variant="secondary" onClick={handleIndietro}>
          <ArrowLeft /> Torna Indietro
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleLogin} className="form-section">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="">Non utilizzeremo da nessun&rsquo;altra parte la tua email.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Inserisci la tua Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="mt-5" type="submit">
            Login
          </Button>
        </Form>
      </div>
      <div className="login-registra-section">
        <p>
          Se non sei ancora registrato clicca <a href="/register">qui</a>
        </p>
      </div>
    </Container>
  );
};
export default Login;
