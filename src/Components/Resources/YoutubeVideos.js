import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const YoutubeVideos = () => {
  const playlistLinks = [
    {
      id: 1,
      videoLink:
        "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdyqLkXudgkR2YGRwT5X5c04M",
    },
    {
      id: 2,
      videoLink:
        "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdyoLY9RVA6o5BcCDIJs0Sxmv",
    },
    {
      id: 3,
      videoLink:
        "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdypvPN2hPnJNwJH4X_LTIJXp",
    },
    {
      id: 4,
      videoLink:
        "https://www.youtube.com/embed/videoseries?list=PLdy1hC79YdyqO0_ZUxeRtTFhsY2sIt7NV",
    },
    {
      id: 5,
      videoLink:
        "https://www.youtube.com/embed/videoseries?list=PLdy1hC79Ydyqwd2nl-Fa-bqYD3c93j6iL",
    },
  ];

  return (
    <div>
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Youtube Videos</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Youtube Videos
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
            {playlistLinks.map((video) => (
              <Col md={4} key={video.id}>
                <div>
                  <div className="m-1">
                    <iframe
                      width="350"
                      height="315"
                      src={video.videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default YoutubeVideos;
