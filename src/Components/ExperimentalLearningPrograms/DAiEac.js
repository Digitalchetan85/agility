import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PayPal from "../PayPal/PayPal";
import video1 from "../Images/videos/ICP-ACC.mp4";
import video2 from "../Images/testimonial-videos/Andres-Feedback-final.mp4";

const DaiEac = () => {
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
  const [Price, SetPrice] = useState(400);
  const [Subject, SetSubject] = useState("");
  const [Message, SetMessage] = useState("");
  const [mailStatus, SetMailStatus] = useState("");
  const [ErrClass, SetErrClass] = useState("alert-success p-3 text-center");

  const [NameErr, SetNameErr] = useState({});
  const [EmailErr, SetEmailErr] = useState({});
  const [PhoneErr, SetPhoneErr] = useState({});

  const formValidation = () => {

    var Valid = true;

    const NameErr = {};
    const EmailErr = {};
    const PhoneErr = {};

    // if(Name == "" && Email == "" && Phone == "" && Subject == "" && Price == "") {
    //   alert("HI")
    //   SetMailStatus("All Fields are required1.");
    //   Valid = false;
    // }

    if (!Name.trim().length < 2) {
      alert("HI")
      NameErr.NameErrShort = "Name should be atleast 3 Characters";
      Valid = false;
    }

    if (!Email.includes("@")) {
      EmailErr.EmailErrSymbol = "Email Id should contain @ Symbol";
      Valid = false;
    }

    var pat = /^\d{10}$/;
    if (!Phone.match(pat)) {
      PhoneErr.PhoneErrDigits = "Please Enter a valid phone Number";
      Valid = false;
    }

    SetNameErr(NameErr);
    SetEmailErr(EmailErr);
    SetPhoneErr(PhoneErr);
    // alert(Valid)
    return Valid;
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    //alert("hi")
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      var Valid = formValidation();
      // alert("Valid =" +Valid)
      if (Valid) {
          displayRazorpay(Price);
        }
      
    }

    setValidated(true);

    // if (validated) {
    //   displayRazorpay(Price);
    // }

    // alert("hi")
    // console.log('hello')
    // console.log(Name)
    // console.log(Email)
    // console.log(Phone)

    SetName(Name);
    SetEmail(Email);
    SetPhone(Phone);
    SetPrice(Price);
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

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline..");
      return;
    }

    const options = {
      key: "rzp_test_YPt7F9CZJqkwGO",
      currency: "INR",
      amount: Price * 100,
      contact: Phone,
      email: Email,
      name: "Agility",
      description: "Payment for Course",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Success payment Done.");
      },
      prefill: {
        name: "Agility",
        contact: Phone,
        email: Email,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
                <h2 className="text-center text-white">ICP - ACC</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a
                        href="/capability-building-programs/ic-agile"
                        className="custom"
                      >
                        IC - Agile
                      </a>
                    </li>
                    <li className="breadcrumb-item">ICP - ACC</li>
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
              <div className="">
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://designrr.page?id=149596&token=4003258846&type=FP&h=3861"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div>

              <div className="pt-2 pb-2">
                <Row>
                  <Col md={6}>
                    <div className="text-center pt-3 pb-3">
                      <h2 className="text-white"></h2>
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
                  validate={validated}
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
                  <Row className="d-none">
                    <Col md={12}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          required
                          onChange={(e) => {
                            SetPrice(e.target.value);
                          }}
                          value={Price}
                          type="tel"
                          placeholder="Price*"
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
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={() => displayRazorpay(Price)}
                        >
                          Checkout
                        </Button>
                        {/* {checkout ? (
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
                        )} */}
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

export default DaiEac;
