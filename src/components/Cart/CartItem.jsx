import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../contexts/use-Cart";

const CartItem = ({ item, i }) => {
  const { removeItemToCart } = useCart();

  console.log("i", i)

  return (
    <div>
      <Row className="my-2 border py-2 rounded">
        <Col sm={8}>
          <Row>
            <Col sm={3} className="text-center">
              <img
                variant="top"
                src={item.courseImg}
                className="w-50 h-100"
                alt=""
              />
            </Col>
            <Col sm={9} className="d-flex flex-column justify-content-center">
              <div className="fw-bold p-2">{item.courseName}</div>
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="d-flex flex-column justify-content-center">
          <Row className="text-center">
          <Col sm={6}>
              <h5 className="lead mx-2">{item.coursePrice}</h5>
            </Col>
            <Col sm={6}>
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => {
                  removeItemToCart(item, i);
                }}
                className="icon"
                style={{
                  fontSize: "1.2rem",
                  color: "#1CA599",
                  cursor: "pointer",
                }}
              />
            </Col>
          </Row>
        </Col>
        </Row>
    </div>
  );
};

export default CartItem;
