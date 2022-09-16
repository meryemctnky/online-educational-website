import * as yup from "yup";

const signinSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email is required!"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required!"),
});

const signupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Enter a valid email").required("Email is required!"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required!"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "The password confirmation does not match!").required("Confirm password is required!"),
});


export {
  signinSchema,
  signupSchema
}



