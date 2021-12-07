import React from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from "../Images/mentoring/6.png";
import img2 from "../Images/mentoring/7.png";
import img3 from "../Images/mentoring/5.png";

const Mentoring = () => {
  const associations = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      title: "Agile Coaches",
      desc: "One of the biggest challenges that we hear from Agile Coaches is their ability to engage Executives & Senior Leaders to ensure their active participation in the transformation.",
      desc1:
        "Coaching Executives for enhancing Leadership Agility:  This is a mentoring program specially for Agile Coaches to equip themselves to engage effectively with Executives & Senior Leaders in an organization.",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      title: "Scrum Masters",
      desc: "Most Scrum Master are struggling to establish themselves and their role within the organization.",
      desc1:
        "Expert Scrum Master is a mentoring program specially designed for Scrum Masters & Aspiring Scrum Masters to enhance their skillsets to be establish themselves and serve the team, leadership & the organization to continuously deliver value and evolve.",
    },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  };
  return (
    <div>
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Mentoring</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Mentoring
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
              <div className="text-center">
                <Image className="img-fluid" src={img3} alt="mentoring" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <OwlCarousel options={options}>
            {associations.map((item, index) => (
              <div className=" text-center m-1" key={index}>
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={item.imgurl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                    <Card.Text>{item.desc1}</Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
          <Container>
              <Row>
                  <Col md={12}>
                      <div className="">
                          <h2 className="text-primary pt-3 pb-3">Learning & Development:</h2>
                          <p>DAI Flagship Programs: These are the experiential learning programs that we have developed with specific learning objectives on driving expertise in the roles of being an Agile Coach or Agile Leader. Look out for the courses we are offering in our Learnings page.</p>
                          <p>ICAgile: ICAgile is one of the biggest organizations that is offering courses on diverse Agile competencies covering Enterprise Transformation, Agile Coaching, DevOps, Product Management, Testing amongst others. Look out for the courses we are offering in our Learnings page.</p>
                          <p>Scaled Agile (SAFe): SAFe is one of the successful scaling frameworks being adopted by many organizations to achieve business agility. Look out for the courses we are offering in our Learnings page.</p>
                          <p>Academic Programs: We have developed programs for specifically students from Engineering and Management Institutes to help them be industry ready. Look out for the courses we are offering in our Learnings page.</p>
                          <p>Executive Coaching: Are you an Executive or a Leader looking to further your career? Our “DREAMS” framework does wonders for our clients and this has been established from the feedback and the success stories of clients. </p>
                          <p>Team Coaching: Coaching Teams is a different competency against coaching individuals. The outcomes of Systemic Team Coaching are very impactful, help the teams become high value creating teams and organizations. </p>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
    </div>
  );
};

export default Mentoring;
