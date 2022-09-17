import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { signinSchema } from "../../constants/yup";
import { loginService } from "../../services/auth";
import { useAuth } from "../../contexts/use-Auth";
import { toast } from 'react-toastify';

function Signin() {
  const [error, setError] = useState("");
  const { setAuth } = useAuth();
  

  return (
    <Formik
      validationSchema={signinSchema}
      onSubmit={async (values) => {
        const response = await loginService(values);

        if (response.status === 200 && response.data.length > 0) {
          setError("");
          setAuth(response.data);
          toast.success("You have successfully signed in");
        } else {
          toast.error("Sorry, an error occurred");
        }
      }}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Container>
          <Row>
            <Col className="ms-auto py-3">
              <Form noValidate onSubmit={handleSubmit}>
                <h2 className="fw-bold mb-3">Sign In</h2>
                <Form.Group className="mb-3" controlId="validationFormikEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="validationFormikPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.password && !errors.password}
                    isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button className="mb-3" type="submit">
                  Login
                </Button>
                {error && <div className="text-danger">{error}</div>}
              </Form>
              <Form.Text className="my-4">
                Don't have an account? <Link to="/register">Sign up</Link>
              </Form.Text>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

export default Signin;
