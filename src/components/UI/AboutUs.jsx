import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "../UI/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const AboutUs = () => {
  return (
    <div>
      <Row>
        <Col sm={6} className="d-flex flex-column justify-content-center">
          <h2 className="fw-bolder">About Us</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur. Tempore autem quod esse
            reiciendis nesciunt quam corporis dignissimos, voluptatibus fuga
            fugit.
          </p>
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
            optio quam ex ea officia ab nisi ducimus maxime magni.
          </p>
          <ul className="list-unstyled lead">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="about-icon"/>
              <span className="mx-2">
                Setup and installation takes less time
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="about-icon"/>
              <span className="mx-2">
                Professional and easy to use software
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="about-icon"/>
              <span className="mx-2">
                Perfect for any device with pixel-perfect design
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="about-icon"/>
              <span className="mx-2">Setup and installation too fast</span>
            </li>
          </ul>
        </Col>
        <Col sm={6} className="d-flex flex-column justify-content-center">
          <Slider />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
