import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Slide1 from "./Images/temp1.png";

const About = () => {
  return (
    <div>
      <div id="about-us" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">About</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <p>
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consectetur adip
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adipconsectetur adip lorem ipsum dolor sit
                amet, consectetur adip lorem ipsum dolor sit amet, consectetur
                adip lorem ipsum dolor sit amet, consectetur adipconsectetur
                adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
                consectetur adipconsectetur adip lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consectetur adip
                lorem ipsum dolor sit amet, consectetur adipconsectetur adip
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip lorem ipsum dolor sit amet,
                consectetur adipconsectetur adip lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consectetur adip
                lorem ipsum dolor sit amet, consectetur adip
              </p>
              <p>
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consectetur adip
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adipconsectetur adip lorem ipsum dolor sit
                amet, consectetur adip lorem ipsum dolor sit amet, consectetur
                adip lorem ipsum dolor sit amet, consectetur adipconsectetur
                adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
                consectetur adipconsectetur adip lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consectetur adip
                lorem ipsum dolor sit amet, consectetur adipconsectetur adip
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip lorem ipsum dolor sit amet,
                consectetur adipconsectetur adip lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consectetur adip
                lorem ipsum dolor sit amet, consectetur adip
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <Image
                src={Slide1}
                alt="Slide 1"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center">Our Mision</h2>
                <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adipconsectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center">Our Mision</h2>
                <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adipconsectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
