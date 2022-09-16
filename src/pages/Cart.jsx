import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import { Container, Row, Card } from "react-bootstrap";
import { useCart } from "../contexts/use-Cart";


const Cart = () => {
  const navigate = useNavigate();
  const { cartList } = useCart();
  
  return (
    <Container>
      <h2>Shopping Cart</h2>
      <Row>
        {cartList.length > 0 ? (
          cartList.map((item, i) => <CartItem key={i} item={item} i={i} />)
        ) : (
          <Card className="d-flex h-100 text-center">
            <Card.Body className="d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center">
              <div className="px-3">
                <p className="lead">
                  Your cart is empty. Keep shopping to find a course!
                </p>
                <p className="lead">
                  <button
                    className="btn btn-primary btn-lg px-4 me-md-2 mb-3"
                    onClick={() => {
                      navigate("/courses");
                    }}
                  >
                    Keep Shopping
                  </button>
                </p>
              </div>
            </Card.Body>
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
