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
                      <a href="/" className="custom">
                        Home
                      </a>
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
            <Col md={12}>
              <p>
                Digital Agility Institute was formed with a clear vision to
                serve the community to help us be the best version of ourselves
                which can result in accomplishing our “DREAMS”. We have a great
                team of experts who strongly believe in our purpose and mission
                and value contributing to their bit to the community.
              </p>
            </Col>
            {/* <Col md={4} className="align-self-center">
              <Image
                src={Slide1}
                alt="Slide 1"
                className="img-fluid rounded shadow-sm"
              />
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <h2 className="pb-2 text-center">K Nagamaheswari</h2>
                {/* <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div> */}
                <p className="pt-2 text-center">Founder</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <h2 className="pb-2 text-center">Nivarti Jayaram</h2>
                {/* <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div> */}
                <p className="pt-2 text-center">
                  Executive Coach, Author, Transformation Leader, Speaker &
                  Mentor
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <h2 className="pb-2 text-center">Anu Ravi</h2>
                {/* <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div> */}
                <p className="pt-2 text-center">
                  NLP Coach, Enterprise Agile Coach, Transformation Leader,
                  Speaker & Mentor
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <h2 className="pb-2 text-center">Mahesh Varadharajan </h2>
                {/* <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div> */}
                <p className="pt-2 text-center">
                  SPCT Candidate, Enterprise Agile Coach, Speaker, Mentor
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white shadow p-3 m-1 rounded">
                <h2 className="pb-2 text-center">Milind Kanbur</h2>
                {/* <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div> */}
                <p className="pt-2 text-center">
                  Enterprise Agile Coach, OKR Coach, Jury Member-Global PMO
                  Awards
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
