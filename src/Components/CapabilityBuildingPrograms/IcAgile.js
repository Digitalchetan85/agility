import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
// import Model from "../Modals/IcAgileModel";
import img1 from "../Images/capability-building-programs/icp-acc.png";
import img2 from "../Images/capability-building-programs/icp-cat.png";
import img3 from "../Images/capability-building-programs/icp-org.png";
import img4 from "../Images/capability-building-programs/icp-atf.png";
import img5 from "../Images/capability-building-programs/icp-ent.png";
import img6 from "../Images/capability-building-programs/icp-pdv.png";
import { Link } from "react-router-dom";

const IcAgile = () => {
  const courses = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      title: "ICP - ACC",
      description: "text",
      to: "/ic-agile/icp-acc/",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      title: "ICP - CAT",
      description: "text",
      to: "/ic-agile/icp-cat/",
    },
    {
      id: 3,
      imgurl: img3,
      alt: "",
      title: "ICP - ORG",
      description: "text",
      to: "/ic-agile/icp-org/",
    },
    {
      id: 4,
      imgurl: img4,
      alt: "",
      title: "ICP - ATF",
      description: "text",
      to: "/ic-agile/icp-atf/",
    },
    {
      id: 5,
      imgurl: img5,
      alt: "",
      title: "ICP - ENT",
      description: "text",
      to: "/ic-agile/icp-ent/",
    },
    {
      id: 6,
      imgurl: img6,
      alt: "",
      title: "ICP - PDV",
      description: "text",
      to: "/ic-agile/icp-pdv/",
    },
  ];

  return (
    <div>
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">IC - Agile</h2>
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
                      IC - Agile
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
                    <Card.Title className="text-primary">{course.title}</Card.Title>
                    {/* <Model /> */}
                    <Button variant="outline-primary" as={Link} to={course.to}>
                      Read more
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

export default IcAgile;
