import React from "react";
import { Navbar, NavDropdown, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";

const TopMenubar = () => {
  return (
    <div className="sticky-top bg-white shadow">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm"
        id="navbar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/agility">
            <Image src={Logo} alt="Shanthas Designs and Prints Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/agility">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
              <NavDropdown title="Training" id="training">
                <NavDropdown
                  title="Capability Building Programs"
                  id="coaching-inner"
                  drop="end"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/capability-building-programs/ic-agile"
                  >
                    IC Agile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/capability-building-programs/safe"
                  >
                    SAFe
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/capability-building-programs/dasa"
                  >
                    DASA
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Experiential Learning Programs"
                  id="coaching-inner"
                  drop="end"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/experimental-learning-programs/dai-esm"
                  >
                    DAI - ESM
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/experimental-learning-programs/dai-eac"
                  >
                    DAI - EAC
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/experimental-learning-programs/dai-dal"
                  >
                    DAI - DAL
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Coaching" id="coaching">
                <NavDropdown.Item as={Link} to="/executive-coaching">
                  Executive Coaching
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/team-coaching">
                  Team Coaching
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/mentoring">
                Mentoring
              </Nav.Link>
              <NavDropdown
                title="Resources"
                id="digital-marketing-solutions-dropdown"
              >
                <NavDropdown.Item as={Link} to="/youtube-videos">
                  Youtube Videos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/blogs">
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/reusable-templates">
                  Reusable Templates
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/assessments">
                  Assesments
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/work-books">
                  Work books
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/custom-slider">
                  customslider
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>{/* <Nav.Link>Download Brochure</Nav.Link> */}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenubar;
