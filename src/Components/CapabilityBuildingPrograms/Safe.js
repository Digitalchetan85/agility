import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import img1 from "../Images/capability-building-programs/safe/sa.png";
import img2 from "../Images/capability-building-programs/safe/ssm.png";
import img3 from "../Images/capability-building-programs/safe/sasm.png";
import img4 from "../Images/capability-building-programs/safe/popm.png";
import img5 from "../Images/capability-building-programs/safe/lpm.png";
import { Link } from "react-router-dom";

const Safe = () => {
  const courses = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      title: "SA SAFe5",
      description: "text",
      to: "/safe-flipbook",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      title: "SSM SAFe5",
      description: "text",
      to: "/safe-flipbook",
    },
    {
      id: 3,
      imgurl: img3,
      alt: "",
      title: "SASM SAFe5",
      description: "text",
      to: "/safe-flipbook",
    },
    {
      id: 4,
      imgurl: img4,
      alt: "",
      title: "POPM SAFe5",
      description: "text",
      to: "/safe-flipbook",
    },
    {
      id: 5,
      imgurl: img5,
      alt: "",
      title: "LPM SAFe5",
      description: "text",
      to: "/safe-flipbook",
    },
  ];

  return (
    <div>
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">SAFe</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Capability Building Programs
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      SAFe
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
                    <Card.Text>{course.description}</Card.Text>
                    <Button variant="primary" as={Link} to={course.to}>Read More</Button>
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

export default Safe;
