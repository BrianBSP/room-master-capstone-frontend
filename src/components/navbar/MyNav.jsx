import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyNav = () => {
  const login = useSelector((state) => state.login);
  const { utente } = login;
  return (
    <Navbar expand="lg" className="myNav">
      <Container>
        <img src="../public/rm3.svg" alt="logo" width={40} />
        <Navbar.Brand href="/#home" className="text-white ms-2 titleNav">
          ROOM MASTER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="d-flex justify-content-between">
            <div className="d-flex">
              <Nav.Link href="/#home">Home</Nav.Link>
              <Nav.Link href="/#about-contain" className="ms-4">
                About Us
              </Nav.Link>
              <Nav.Link href="/#servizi-contain" className="ms-4">
                Servizi
              </Nav.Link>
              <Nav.Link to="/contatti" href="/contatti" className="ms-4">
                Contatti
              </Nav.Link>
            </div>
            <div>
              {utente ? (
                <Nav.Link href="/profilo">
                  Ciao, {utente.nome} {utente.cognome} <img src={utente.avatar} width={25} className="rounded" />
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </div>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
