import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="myNav">
      <Container>
        <img src="../public/rm3.svg" alt="logo" width={40} />
        <Navbar.Brand href="/home" className="text-white ms-2 titleNav">
          ROOM MASTER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="d-flex justify-content-between">
            <div className="d-flex">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-contain" className="ms-4">
                About Us
              </Nav.Link>
              <Nav.Link href="#servizi-contain" className="ms-4">
                Servizi
              </Nav.Link>
              <Nav.Link href="/contatti" className="ms-4">
                Contatti
              </Nav.Link>
            </div>
            <div>
              <Nav.Link href="/auth/login">Login</Nav.Link>
            </div>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
