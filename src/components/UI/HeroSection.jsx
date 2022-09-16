import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../../assets/images/hero-img1.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="flex-lg-row-reverse align-items-center">
          <Col sm={8} lg={6} className="col-10">
            <img
              src={heroImg}
              className="d-block mx-lg-auto w-100 rounded"
              alt=""
              loading="lazy"
            />
          </Col>
          <Col lg={6}>
            <h1 className="display-5 fw-bolder lh-1 mb-3" style={{color: '#1CA599'}}>
              Find your course <br />
              Change your life
            </h1>
            <p className="lead">
              Online learning and teaching marketplace with 5K+ courses & 10M
              students. Taught by experts to help you acquire new skills.
            </p>
            <button type="button " className="btn btn-primary btn-lg px-4 me-md-2 mb-3">
              Get Started
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
