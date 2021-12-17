import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Workbook = () => {
  const workbooks = [
    {
      id: 1,
      title: "",
      link: "https://designrr.page?id=152087&token=3024243255&type=FP&h=7404",
    },
    {
      id: 2,
      title: "",
      link: "https://designrr.page?id=152089&token=247994237&type=FP&h=7119",
    },
    {
      id: 3,
      title: "",
      link: "https://designrr.page?id=152090&token=1114351748&type=FP&h=4097",
    },
    {
      id: 4,
      title: "",
      link: "https://designrr.page?id=152090&token=1114351748&type=FP&h=4097",
    },
    {
      id: 5,
      title: "",
      link: "https://designrr.page?id=152091&token=3797904167&type=FP&h=4723",
    },
    {
      id: 6,
      title: "",
      link: "https://designrr.page?id=152318&token=2327641500&type=FP&h=4599",
    },
    {
      id: 7,
      title: "",
      link: "https://designrr.page?id=152320&token=2794389086&type=FP&h=6053",
    },
    {
      id: 8,
      title: "",
      link: "https://designrr.page?id=152320&token=2794389086&type=FP&h=9083",
    },
    {
      id: 9,
      title: "",
      link: "https://designrr.page?id=152321&token=2295496684&type=FP&h=4341",
    },
    {
      id: 10,
      title: "",
      link: "https://designrr.page?id=152323&token=2503956160&type=FP&h=6337",
    },
    {
      id: 11,
      title: "",
      link: "https://designrr.page?id=152324&token=1454908737&type=FP&h=6351",
    },
    {
      id: 12,
      title: "",
      link: "https://designrr.page?id=152325&token=1646833989&type=FP&h=8153",
    },
    {
      id: 13,
      title: "",
      link: "https://designrr.page?id=152325&token=1646833989&type=FP&h=5297",
    },
    {
      id: 14,
      title: "",
      link: "https://designrr.page?id=152326&token=3976412591&type=FP&h=2595",
    },
  ];

  return (
    <div>
      <div className="bg-primary pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Workbooks</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Workbooks
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
            {workbooks.map((item) => (
              <Col md={4} key={item.id}>
                <div className="ratio ratio-16x9 m-1">
                  <iframe
                    src={item.link}
                    title={item.title}
                  ></iframe>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Workbook;
