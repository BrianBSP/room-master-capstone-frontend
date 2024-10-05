import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="myNav">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between">
            <div>
              <div>
                <Nav.Link className="text-white" href="home">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="aboutUs">
                  About Us
                </Nav.Link>
              </div>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
              <div>
                <Nav.Link className="text-white" href="aboutUs">
                  Login
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
