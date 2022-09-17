import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../../assets/images/hero-img1.png";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <Container>
        <Row className="flex-lg-row-reverse justify-content-center">
          <Col sm={12} lg={6} className="col-10">
            <img
              src={heroImg}
              className="d-block mx-lg-auto w-100 rounded"
              alt=""
              loading="lazy"
            />
          </Col>
          <Col sm={12} lg={6} className="py-5 my-5">
            <h1 className="display-5 fw-bolder lh-1 mb-3" style={{color: '#1CA599'}}>
              Find your course <br />
              Change your life
            </h1>
            <p className="lead">
              Online learning and teaching marketplace with 5K+ courses & 10M
              students. Taught by experts to help you acquire new skills.
            </p>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 mb-3" onClick={() => navigate("/register")}>
              Get Started
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

