import React from "react";
import { Card, Button, Col, CardGroup } from "react-bootstrap";
import { useCart } from "../../contexts/use-Cart"

const CourseCard = ({item}) => {
  const { addItemToCart } = useCart();


  return (
    <Col md={3} sm={6} xs={6} className="my-3 p-2-sm">
      <Card>
      <Card.Img variant="top" src={item.courseImg} style={{height: '200px'}} />
      <Card.Body>
        <Card.Title className="fw-bold">{item.courseName}</Card.Title>
        <Card.Text>
          {item.eduName}
        </Card.Text>
        <CardGroup>
        <Button variant="primary" onClick={() => {addItemToCart(item)}}>Add to Cart</Button>
        <h5 className="fw-bolder ms-auto">
          {item.coursePrice}
        </h5>
        </CardGroup>
      </Card.Body> 
      </Card>
    </Col>
  );
};

export default CourseCard;


