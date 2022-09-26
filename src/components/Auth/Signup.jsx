import React from "react";
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import { Form, Button, Row, Col } from "react-bootstrap";
import { signupSchema } from "../../constants/yup";
import image from "../../assets/images/signup.jpg";
import { registerService } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate();

  return (
    <div className="form-wrapper mb-5">
      <Formik
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          const response = await registerService(values);
          
          if (response.status === 201) {

              toast.success("Registration successfully completed");
              localStorage.setItem('user', JSON.stringify(response.data))
              navigate("/login")
         
          } else {
            toast.error("Sorry, an error occurred");
          }
        }}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
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
          <Row>
            <Col className="me-3 mb-2">
              <img src={image} alt="" className="signup-img"/>
            </Col>
            <Col className="ms-auto py-3">
              <Form noValidate onSubmit={handleSubmit}>
                <h2 className="fw-bolder mb-3">Sign Up</h2>
                <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.name && !errors.name}
                    isInvalid={touched.name && errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

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

                <Form.Group
                  className="mb-3"
                  controlId="validationFormikConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.confirmPassword && !errors.confirmPassword}
                    isInvalid={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="mb-3" type="submit">
                  Submit
                </Button>
              </Form>
              <Form.Text className="my-4">
              Already have an account? <Link to="/login">Sign in</Link>
              </Form.Text>
            </Col>
          </Row>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
