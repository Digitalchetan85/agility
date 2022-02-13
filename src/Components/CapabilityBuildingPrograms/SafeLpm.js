import React, { useEffect, useState } from "react";
import { Image, Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PayPal from "../PayPal/PayPal";
import video1 from "../Images/SAFe-Course-Videos/SAFe-LPM.mp4";
import video2 from "../Images/testimonial-videos/Ian-Feedback-final.mp4";
import icpLpm from "../Images/capability-building-programs/safe/lpm.png";

const SafeLpm = () => {
  useEffect(() => {
    fetch("https://api.ipify.org?format=jsonp?callback=?", {
      method: "GET",
      headers: {},
    })
      .then((res) => {
        return res.text();
      })
      .then((ip) => {
        console.log("ip: " + ip);
      });
  });

  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Subject, SetSubject] = useState("");
  const [Message, SetMessage] = useState("");
  const [mailStatus, SetMailStatus] = useState("");
  const [ErrClass, SetErrClass] = useState("alert-success p-3 text-center");

  const [NameErr, SetNameErr] = useState({});
  const [EmailErr, SetEmailErr] = useState({});
  const [PhoneErr, SetPhoneErr] = useState({});

  const formValidation = () => {
    const NameErr = {};
    const EmailErr = {};
    const PhoneErr = {};

    // const isValidated = true;

    if (Name.trim().length < 2) {
      NameErr.NameErrShort = "Name should be atleast 3 Characters";
    }

    if (!Email.includes("@")) {
      EmailErr.EmailErrSymbol = "Email Id should contain @ Symbol";
    }

    // if (!Phone.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    //     PhoneErr.PhoneErrDigits = "Please Enter a valid phone Number"
    // }

    SetNameErr(NameErr);
    SetEmailErr(EmailErr);
    SetPhoneErr(PhoneErr);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    //alert("hi")
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      const isValidated = formValidation();

      if (isValidated === true) {
      }
    }

    setValidated(true);

    // alert("hi")
    // console.log('hello')
    // console.log(Name)
    // console.log(Email)
    // console.log(Phone)

    SetName(Name);
    SetEmail(Email);
    SetPhone(Phone);
    //create newXMLHTTPRequest

    var xhr = new XMLHttpRequest();

    // get a callback function when server server responds

    xhr.addEventListener("load", () => {
      //update email Satus email
      console.log(xhr.responseText);

      SetMailStatus(xhr.responseText);

      if (
        xhr.responseText === "Thanks for contacting us. We will reach you soon."
      ) {
        //alert("Success")
        SetErrClass("alert-success p-3 text-center");
      } else {
        // alert("Error")
        SetErrClass("alert-danger p-3 text-center");
      }
    });

    xhr.open(
      "GET",
      "http://webmillionservices.com/loan-mail-mobile.php?sendto=" +
        Email +
        "&name=" +
        Name +
        "&phone=" +
        Phone +
        "&subject=" +
        Subject +
        "&msg=" +
        Message
    );

    //send the requests
    xhr.send();
  };

  const [checkout, setCheckout] = useState(false);
  return (
    <>
      <div
        id="ic-agile-flipbook"
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">SAFe5 - LPM</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a href="/capability-building-programs/safe" className="custom">
                        Capability Building Programs
                      </a>
                    </li>
                    <li className="breadcrumb-item">SAFe5 - LPM</li>
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
              <Row>
                <Col md={3} className="align-self-center">
                  <Image src={icpLpm} alt="" className="img-fluid" />
                </Col>
                <Col md={9} className="">
                  <h2 className="text-primary py-3 ">
                    About This Certification
                  </h2>
                  <p className="text-align-justify">The Lean Portfolio Management course helps executives, project management officers (PMOs) and other key stakeholders plan dynamically and be flexible enough to adjust initiatives and budgets as the market changes. The LPM course provides the guidance and tools attendees need to work effectively in remote environments with distributed teams.</p>
                  <p>You’ll learn how to connect portfolio strategy and initiatives to the planning and execution of work, how to integrate feedback from participatory budgeting, and how to adapt to change while maintaining your funding vision and roadmap.</p>
                </Col>
              </Row>
              <Row className="py-2">
                <Col md={6} className="">
                  <h4 className="text-primary py-2">
                    Featured Learning Outcomes
                  </h4>
                  <ul>
                    <li>How to connect the portfolio to the enterprise.</li>
                    <li>How to maintain portfolio vision and roadmap.</li>
                    <li>How to establish Lean budgets and guardrails.</li>
                    <li>How to create portfolio flow..</li>
                  </ul>
                </Col>
                <Col md={6} className="">
                  <h4 className="text-primary py-2">What you will receive</h4>
                  <ul>
                    <li>Course materials</li>
                    <li>Access to SAFe® Collaborate, a visual online workspace</li>
                    <li>One-year membership to the SAFe® Community Platform</li>
                    <li>SAFe LPM certification exam</li>
                    <li>Access to the optional Getting Started with LPM Workshop</li>
                    <li>Connect to Digital Agility Institute Community</li>
                  </ul>
                </Col>
                <p>Our training is delivered by SAFe Program Consultants with diverse experience of transforming teams & organizations implementing SAFe successfully.</p>
                
              </Row>

              <Row>
                <Col md={6} className="pb-3 pt-md-2 pb-md-2">
                  <h4 className="text-primary py-2">Who Should attend :</h4>
                  <ul>
                    <li>Agile Leaders or aspiring Leaders </li>
                    <li>Enterprise Agile Coaches and aspiring coaches </li>
                    <li>First level & Middle level Managers </li>
                    <li>Change Managers & Change Agents </li>
                    <li>and anyone with the desire to explore the power of People Development.</li>
                  </ul>
                </Col>
                <Col md={6} className="pb-3 pt-md-2 pb-md-2">
                  <h4 className="text-primary py-2">Prerequisites:</h4>
                  <ul>
                   <li>An Intermediate level course</li>
                    <li>
                      There are no conditional pre-requisites for the training
                      program
                    </li>
                    <li>
                      Participants should have exposure at least one agile
                      framework.
                    </li>
                  </ul>
                </Col>
              </Row>
              {/* <div className="">
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://designrr.page?id=149596&token=4003258846&type=FP&h=3861"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div> */}
              <div className="pt-2 pb-2">
                <Row>
                  <Col md={6}>
                    <div className="text-center pt-3 pb-3">
                      <h2 className="text-white"> </h2>
                      <video height="400" width="400" controls>
                        <source src={video2} type="video/mp4"></source>
                      </video>
                    </div>
                  </Col>
                  <Col md={6}></Col>
                </Row>
              </div>
            </Col>
            <Col md={4} className="">
            <div className="text-center pt-3 pb-3 bg-primary">
                <h2 className="text-white"></h2>
                <video height="300" width="300" controls autoPlay>
                  <source src={video1} type="video/mp4"></source>
                </video>
              </div>
              <div className="shadow p-3">
                <h3 className="text-primary">Schedule Your Course</h3>
                <p>Course Info</p>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className=""
                >
                  <Row>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetName(e.target.value);
                          }}
                          value={Name}
                          type="text"
                          placeholder="Name*"
                        />
                        {Object.keys(NameErr).map((key, index) => {
                          return (
                            <Form.Control.Feedback type="invalid" key={index}>
                              {NameErr[key]}
                            </Form.Control.Feedback>
                          );
                        })}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetEmail(e.target.value);
                          }}
                          value={Email}
                          type="email"
                          placeholder="Email*"
                        />
                        {Object.keys(EmailErr).map((key, index) => {
                          return (
                            <Form.Control.Feedback type="invalid" key={index}>
                              {EmailErr[key]}
                            </Form.Control.Feedback>
                          );
                        })}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetPhone(e.target.value);
                          }}
                          state={Phone}
                          type="text"
                          placeholder="Phone*"
                        />
                        {Object.keys(PhoneErr).map((key, index) => {
                          return (
                            <Form.Control.Feedback type="invalid" key={index}>
                              {PhoneErr[key]}
                            </Form.Control.Feedback>
                          );
                        })}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetSubject(e.target.value);
                          }}
                          value={Subject}
                          type="text"
                          placeholder="Subject*"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group
                        className="pb-5"
                        controlId="exampleForm.ControlTextarea1 "
                      >
                        <Form.Control
                          as="textarea"
                          onChange={(e) => {
                            SetMessage(e.target.value);
                          }}
                          required
                          value={Message}
                          placeholder="Message*"
                          rows={4}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div id="mail-status">
                        {mailStatus ? (
                          <p className={ErrClass}>{mailStatus} </p>
                        ) : null}
                      </div>
                      <div className="">
                        {checkout ? (
                          <PayPal />
                        ) : (
                          <Button
                            variant="primary"
                            onClick={() => {
                              setCheckout(true);
                            }}
                          >
                            Checkout
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SafeLpm;
