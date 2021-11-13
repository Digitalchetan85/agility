import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from "../Images/temp.png";
import img2 from "../Images/temp.png";

const TrainingDetails = () => {
  const associations = [
    { id: 1, imgurl: img1, alt: "", title: "Capabiltity Building Programs" },
    { id: 2, imgurl: img2, alt: "", title: "Experimental Learning Programs" },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
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
      <div>
        <Container>
          <OwlCarousel options={options}>
            {associations.map((item, index) => (
              <div className="text-center m-1" key={index}>
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={item.imgurl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </Container>
      </div>
    </div>
  );
};

export default TrainingDetails;
