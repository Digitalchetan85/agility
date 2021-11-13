import React from "react";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
import Services from "./Includes/ServicesPages";
import MainSlider from "./Includes/MainSlider";
import Mentoring from "./Includes/MentoringDetails";
import Coaching from "./Includes/CoachingDetails";
import Training from "./Includes/TrainingDetails";
import Blogs from './Blogs/Blog';
import Slide1 from "./Images/temp1.png";

const Home = () => {
  return (
    <div>
      <MainSlider />
      <div id="about" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="text-center">
                <h2 className="pt-2 pb-2 text-primary">
                  Digital Agility Institute
                </h2>
                <p>
                  “Welcome to Digital Agility Institute" Community. Despite so
                  many certifications flourishing in the markets across the
                  globe, the success rate is transforming organizations to be
                  Agile is much smaller..
                </p>
              </div>
              <div className="text-center p-2 bg-white shadow">
                <h4 className="pt-2 pb-2 text-primary">Our Mission</h4>
                <p>
                  "help organizations to successfully transform and help them
                  thrive & excel even in case of extreme disruptions through
                  continuous evolution & high performance".
                </p>
                <p>
                  We intend to accomplish this by helping Agile Coaches, Change
                  Agents & Organizational Leaders and Executives integrate Agile
                  Values & Principles into their mindset thereby influencing
                  their behaviors and habits that help them inspire whoever they
                  interact with.
                </p>
                <p>
                  We ensure this by using experiential learning & coaching
                  mindset in our programs rather than teaching. We run the
                  highest quality programs at a price you feel valued to invest.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="about" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8} className="align-self-center">
              <h2 className="pt-2 pb-2 text-primary">
                Digital Agility Framework
              </h2>
              <p>
                “Digital Agility is the ability of an organization to digitalize
                their spectrum of products and services with a goal of achieving
                enterprise agility being the flag bearer which helps them derive
                better customer centricity, employee engagement, culture of
                collaboration, continuous improvement and innovation to thrive &
                excel in accomplishing their business vision & strategies”.
              </p>
              <p>
                It requires proactively looking out for global challenges that
                are driven by both people & the environment around them and the
                opportunities they present, developing new technologies,
                products, practices and behaviors to resolve them considering
                the emerging business, political and people landscape for
                economic, social and environmental risks.
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
      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <h2 className="pt-2 pb-2 text-center">Our Services</h2>
        <Services />
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <h2 className="pt-2 pb-2 text-center">Mentoring</h2>
        <Mentoring />
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <h2 className="pt-2 pb-2 text-center">Training</h2>
        <Training />
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <h2 className="pt-2 pb-2 text-center">Coaching</h2>
        <Coaching />
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <h2 className="pt-2 pb-2 text-center">Blogs</h2>
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
