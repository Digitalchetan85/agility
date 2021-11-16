import React from "react";
import { Navbar, NavDropdown, Container, Nav, Image } from "react-bootstrap";
import Logo from "../Images/logo.png";

const TopMenubar = () => {
  return (
    <div className="sticky-top bg-white">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm"
        id="navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo} alt="Shanthas Designs and Prints Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <NavDropdown title="Training" id="training">
                <NavDropdown
                  title="Capability Building Programs"
                  id="coaching-inner"
                  drop="end"
                >
                  <NavDropdown.Item href="/capability-building-programs/ic-agile">
                    IC Agile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/capability-building-programs/safe">
                    Safe
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/capability-building-programs/dasa">
                    DASA
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Experiential Learning Programs"
                  id="coaching-inner"
                  drop="end"
                >
                  <NavDropdown.Item href="">DAI - ESM</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">DAI - EAC</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">DAI - DAL</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Coaching" id="coaching">
                <NavDropdown.Item href="/executive-coaching">
                  Executive Coaching
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/team-coaching">
                  Team Coaching
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/mentoring">Mentoring</Nav.Link>
              <NavDropdown
                title="Resources"
                id="digital-marketing-solutions-dropdown"
              >
                <NavDropdown.Item href="/youtube-videos">
                  Youtube Videos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/reusable-templates">
                  Reusable Templates
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/assesments">
                  Assesments
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/work-books">
                  Work books
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/quiz">Quiz</Nav.Link>
            </Nav>
            <Nav>{/* <Nav.Link>Download Brochure</Nav.Link> */}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenubar;
