import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const utente = { email, password };

    dispatch(loginAction(utente));

    window.location.href = "/dasboard";

    const autenticato = localStorage.getItem("accessToken");
    if (!autenticato) {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Container className="login-section">
      <h2 className="bg-body-tertiary pb-3 rounded-3">Effettua il LOGIN</h2>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Rimani collegato" className="check-section" />
          </Form.Group>
          <Button type="submit">Login</Button>
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
