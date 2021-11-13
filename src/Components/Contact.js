import React, { useState, useEffect } from "react";
import { Row, Form, Col, Container, Button } from "react-bootstrap";

const Contact = () => {
    useEffect(() => {
        fetch('https://api.ipify.org?format=jsonp?callback=?', { 
          method: 'GET',
          headers: {},
        })
        .then(res => {
          return res.text()
        }).then (ip => {
          console.log('ip: ' + ip);
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
  return (
    <div>
      <div id="about-us" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Contact us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact us
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={7}>
              <h3 className="text-primary">Have you any question?</h3>
              <p>
                If you have any query or want to leave a comment about our
                products & services, drop a message or fill the form below.
              </p>
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
                        rows={8}
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
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={5} className="align-self-center">
              <div className="bg-primary rounded text-white">
                <div className="p-3 pt-md-5 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="fas fa-map-marker-alt text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Our Address</h3>
                      <p className="lh-base">
                        #483, 1st Floor, Shop #1, 8th Main,
                        <br /> 10th Cross, Jeevan Bhima Nagar, <br />
                        HAL 3rd Stage, Bangalore -560 075
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="p-3 pt-md-0 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="far fa-clock text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Office Hours</h3>
                      <p className="lh-base">
                        MON - FRIDAY : 8 to 9 PM
                        <br /> SAT - SUN : 10 to 8 PM
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="p-3 pt-md-0 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="fas fa-mobile-alt text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Contact</h3>
                      <p className="lh-base">
                        Phone: +91 80108 79463 <br /> Phone: +91 80108 79463
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
