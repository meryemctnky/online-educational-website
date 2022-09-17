import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FeatureData } from "../../constants/feature-data";

const Features = () => {
  return (
    <section className="feature-section" style={{ backgroundColor: "#006D77" }}>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col
              lg={3}
              md={6}
              key={index}
              className="d-flex flex-column align-items-center justify-content-end"
            >
              <Row className="mb-1">
                <div className="svg-icon ">{item.icon}</div>
              </Row>
              <Row className="mb-1">
                <h6
                  className="feature-title fw-bolder"
                  style={{ color: "#ff9b00" }}
                >
                  {item.title}
                </h6>
              </Row>
              <Row className="mb-1">
                <p className="text-light">{item.desc}</p>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
