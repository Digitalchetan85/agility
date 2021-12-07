import React from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import axios from "axios";

const CustomSlider = () => {
  const [imgUrl, SetimgUrl] = useState("");
  const [Alt, SetimgAlt] = useState("");
  const [error, setError] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    //alert(imgUrl);

    // axios.get("http://localhost/react-projects/agility/Api/custom-slider.php?imgUrl="+imgUrl)
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

    if (imgUrl === "" && Alt === "") {
      setError("Both fields are mondoratory");
    } 

    const data = {image: imgUrl, alt:Alt};
      axios
        .post("http://localhost/react-projects/agility/Api/custom-slider.php", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div>
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Custom Slider Update</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Custom Slider Update
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="custom-slider" className="pt-2 pb-2 pt-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={SubmitHandler}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => {
                      SetimgUrl(e.target.value);
                    }}
                    value={imgUrl}
                    placeholder="Enter Image URL"
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Alternative Name for Image</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => {
                      SetimgAlt(e.target.value);
                    }}
                    value={Alt}
                    placeholder="Enter Image URL"
                  />
                </Form.Group>
                {error === "" ? null : (
                  <div className="pb-2 pt-2">
                    <small className="text-danger mb-2">{error}</small>
                  </div>
                )}
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CustomSlider;
