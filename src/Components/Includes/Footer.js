import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterLogo from "../Images/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark pt-3 pb-3 pt-md-5 pb-md-5" id="footer">
      <Container>
        <Row>
          <Col md={3}>
            <div className="text-center">
              <Image
                src={FooterLogo}
                alt="Shanths Webz Logo"
                className="img-fluid"
              />
              {/* <h5 className="text-uppercase text-white pt-2 pb-2">Digital Agility Institute</h5> */}

              <address className="pt-2 pb-2">
                <p className="text-white">
                  Address
                  <br />
                  <a href="tel:09686409060">Contact: +91 96864 09060</a>
                  <br />
                  <a href="mailto:collaborate@digitalagilityinstitute.com">
                    Email: collaborate@digitalagilityinstitute.com
                  </a>
                </p>
              </address>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-white pt-2 pb-2">Quick Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-white pt-2 pb-2">Our Services</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-white pt-2 pb-2">Our Services</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
