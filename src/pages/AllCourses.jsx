import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import CourseCard from "../components/UI/CourseCard";
import { getCourseService } from "../services/courses";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filterText, setFilterText] = useState("");

  const getCourseList = async () => {
    const response = await getCourseService();
    setCourses(response.data);
  };

  useEffect(() => {
    getCourseList();
  }, []);

  const filtered = courses.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <Container>
      <Row className="d-flex justify-content-between">
        <Col sm={6}>
          <h2 className="fw-bolder">All Courses</h2>
        </Col>
        <Col sm={6} className="d-flex justify-content-lg-end me-auto">
          <Form className="col-6" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      <Row className="">
        {filtered &&
          filtered.map((item, i) => <CourseCard key={i} item={item} />)}
      </Row>
    </Container>
  );
};

export default AllCourses;
