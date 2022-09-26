import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { footerQuickLinks, footerCommunityLinks } from "../../constants/footer-links"
import "../../styles/footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3} md={4} sm={6}>
            <div className="follows mb-2 d-block ">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
              </span>
              <span>
                {" "}
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
              </span>
              <span>
                {" "}
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
              </span>
              <span>
                {" "}
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
              </span>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <h5 className="fw-bolder">Explore</h5>
            <ul className="list-unstyled">
              {footerQuickLinks.map((item, index) => (
                <li key={index}>
                  {" "}
                  <a href={item.url} className="text-decoration-none" style={{color: '#eee'}}>{item.display}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <h5 className="fw-bolder">Community</h5>
            <ul className="list-unstyled">
              {footerCommunityLinks.map((item, index) => (
                <li key={index + 50}>
                  {" "}
                  <a href={item.url} className="text-decoration-none" style={{color: '#eee'}}>{item.display}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <h5 className="fw-bolder">Contact</h5>
            <ul className="list-unstyled">
              <li>+123-456-7890</li>
              <li>+111-222-3333</li>
              <li>lorem@gmail.c</li>
              <li>loremipsum@gmail.com</li>
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
