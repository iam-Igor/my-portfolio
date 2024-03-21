import { useState } from "react";
import {
  Button,
  Container,
  Modal,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

import CV from "../assets/CV_2024_YG.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const downloadPdf = () => {
    window.open(CV, "_blank");
  };

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
                <NavDropdown.Item href="https://discordapp.com/users/829465239455006730">
                  <i className="bi bi-discord text-white me-2"></i>Discord
                </NavDropdown.Item>
                <NavDropdown.Item href="mailto:igorgarofalo@gmail.com">
                  <i className="bi bi-envelope-at me-2"></i> Email
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleShow}>
                  <i className="bi bi-file-earmark-person me-2"></i>
                  My CV
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Brand href="#home" className="ms-md-auto">
                Ygor Garofalo
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        className="cv-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title className="text-white">My CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {CV && (
            <Document file={CV}>
              <Page pageNumber={1} />
            </Document>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="rounded-4"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="success" className="rounded-4" onClick={downloadPdf}>
            Download <i className="bi bi-cloud-arrow-down"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { NavBar };
