import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../../styles/header.css";
import { useAuth } from "../../contexts/use-Auth";
import { useCart } from "../../contexts/use-Cart";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/courses",
    display: "Courses",
  },
];

function Header(props) {
  const { cartList } = useCart();
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="header">
      <Container>
        <div className="nav-wrapper justify-content-lg-start me-auto">
          <div className="d-flex align-items-center me-2 mb-2 mb-lg-0 text-decoration-none">
            <img
              src="/logo.svg"
              width="40"
              height="40"
              className="logo"
              alt="Edusis logo"
            />
            <h5 className="brand-name">EduSis</h5>
          </div>

          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {navLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                style={{ textDecoration: "none" }}
              >
                {link.display}
              </Link>
            ))}
          </div>

          <Form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </Form>

          <div className="nav-end d-flex align-items-end">
            <div className="shopping-icon me-3 position-relative">
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />{" "}
               { cartList.length > 0 ?
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{fontSize: '.5em', backgroundColor: '#ED8E00'}}>
                  {cartList.length}<span className="visually-hidden">unread messages</span>
                </span>
                : ""
                }
              </Link>
            </div>
            {isAuth ? (
              <Button variant="primary" onClick={logout}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  className="btn btn-primary me-2"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign in
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
