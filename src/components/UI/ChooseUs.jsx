import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ReactPlayer from "react-player";
import "../../styles/chooseus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import chooseUs from "../../assets/images/choose-us.jpg";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row className="my-4">
          <Col lg="6" md="6">
            <div className="choose-content py-5">
              <h2 className="fw-bold">Why Choose Us</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, aut exercitationem perspiciatis quibusdam, magni
                recusandae necessitatibus dolores impedit rem illum obcaecati,
                ullam excepturi magnam dignissimos veritatis iure perferendis?
                Illo, obcaecati tempore et placeat optio enim! Omnis autem sint
                cupiditate sapiente animi ipsum beatae doloribus corporis a
                corrupti? Nihil, commodi consequuntur.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="w-100 h-100 ms-auto position-relative">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/1U9TcNJ4D98"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseUs} alt="" className="w-100 rounded" />
              )}

              {!showVideo && (
                <span className="play-icon">
                  <FontAwesomeIcon
                    className="play-circle-line p-5"
                    style={{ fontSize: '2rem', color: '#1CA599' }}
                    icon={faCirclePlay}
                    onClick={() => setShowVideo(!showVideo)}
                  />
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
