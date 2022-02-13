import React from "react";
import { Container, Card } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from "../Images/mentoring/6.png";
import img2 from "../Images/mentoring/7.png";
import { Link } from 'react-router-dom';

const MentoringDetails = () => {
  const associations = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
      link:"",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
      link:"",
    },
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
                <Card className="shadow-sm" as={Link} to={item.link}>
                  <Card.Img variant="top" src={item.imgurl} />
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </Container>
      </div>
    </div>
  );
};

export default MentoringDetails;
