import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../Images/experimental-learning-programs/dai-dal/dai-dal.png";
import img2 from "../Images/experimental-learning-programs/dai-esm/dai-esm.png";
import img3 from "../Images/experimental-learning-programs/dai-eac/dai-eac.png";

const ExperientialLearningPrograms = () => {
  const courses = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      title: "DAI - DAL",
      to: "/dai-dal",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      title: "DAI - ESM",
      to: "/dai-esm",
    },
    {
      id: 3,
      imgurl: img3,
      alt: "",
      title: "DAI - EAC",
      to: "/dai-eac",
    },
  ];

  return (
    <div>
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Experiential Learning Programs</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Experiential Learning Programs
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row>
            {courses.map((course, index) => (
              <Col md={4} key={index}>
                <Card className="shadow m-2 text-center bg-white">
                  <div className="text-center p-2">
                    <Image
                      className="img-fluid"
                      src={course.imgurl}
                      height="225"
                      width="225"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Button variant="primary" as={Link} to={course.to}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ExperientialLearningPrograms;
