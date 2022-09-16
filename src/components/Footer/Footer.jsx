import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="follows mb-2 d-block ">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
              </span>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="fw-bold">Explore</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Educators</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="fw-bold">Community</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Membership</li>
              <li>Purchases Guide</li>
              <li>Terms of Service</li>
              <li>Report Bug</li>
            </ul>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="fw-bold">Contact</h5>
            <ul className="list-unstyled">
              <li>+123-456-7890</li>
              <li>+111-222-3333</li>
              <li>lorem@gmail.c</li>
              <li>loremipsum@gm</li>
              <li>Bursa, Turkey</li>
            </ul>
          </Col>
          <Col className="d-flex justify-content-center mt-3">
            <p className="font-italic">© 2022 Designed by meryemctnky</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
