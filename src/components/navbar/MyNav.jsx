import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  const utente = JSON.parse(localStorage.getItem("utente"));

  const [scrolla, setScrolla] = useState(false);

  const handleScrolla = () => {
    const scrollaTop = window.scrolly || document.documentElement.scrollTop;
    if (scrollaTop > 100) {
      setScrolla(true);
    } else {
      setScrolla(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolla);

    return () => {
      window.removeEventListener("scroll", handleScrolla);
    };
  });

  return (
    <Navbar expand="lg" className={`myNav ${scrolla ? "myNav-scrolla" : ""}`}>
      <Container>
        <img src="../public/rm-logo.svg" alt="logo" width={40} />
        <Navbar.Brand href="/#home" className="ms-2 titleNav">
          ROOM MASTER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="d-flex justify-content-between nav-contain">
            <div className="d-flex align-items-center">
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
                  Ciao, {utente.nome} {utente.cognome}{" "}
                  <img src={utente.avatar} height={50} width={35} className="rounded" />
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
