import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      {" "}
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="sticky-top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className="expand">{"<YG/>"}</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex w-100">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>

              <NavDropdown
                title="Contacts"
                id="basic-nav-dropdown"
                className="me-5"
              >
                <NavDropdown.Item href="https://github.com/iam-Igor">
                  <i className="bi bi-github me-2"></i>GitHub
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/ygor-garofalodev/">
                  <i className="bi bi-linkedin me-2"></i> LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.instagram.com/igorgarofalo/">
                  <i className="bi bi-instagram me-2"></i> Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="mailto:igorgarofalo@gmail.com">
                  <i className="bi bi-envelope-at me-2"></i> Email
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Brand href="#home" className="ms-md-auto">
                Ygor Garofalo
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export { NavBar };
