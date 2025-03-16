import { useFormik } from "formik";
import "./LogIn.css";
import { validationSchema } from "../../utils/validationSchema";
import * as Yup from "yup";
import Field from "../../utils/FieldClass";
import { InputField } from "../../components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logIn, setCurrentUser } from "../../store/reducers/currentUserReducer";

export default function LogIn() {
  // local state to control error display
  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );
  const dispatch = useDispatch();
  // useEffect to navigate to home if user is already logged in and manages to get to this page
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users"));

      console.log(users);

      const invalidCredentials = !users.some(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      setIsErrorDisplayed(invalidCredentials);

      // returning if the user has entered invalid credentials
      if (invalidCredentials) {
        return;
      }

      // selecting the current user
      const currentUser = users.find((user) => user.email === values.email);
      // using dispatch to set the current user
      dispatch(setCurrentUser({ ...currentUser }));
      // using dispatch to log the user in
      dispatch(logIn());
      navigate("/");
    },

    validateOnBlur: false,
    validateOnChange: false,

    validationSchema: Yup.object({
      email: validationSchema.email,
      password: validationSchema.password,
    }),
  });

  const emailField = new Field("email", "Enter your email", "text", formik);
  const passwordField = new Field(
    "password",
    "Enter your password",
    "password",
    formik
  );

  return (
    <div className="LogIn">
      <h1>Log in</h1>
      <div className="login-container">
        <form action="" className="login-form" onSubmit={formik.handleSubmit}>
          <InputField {...emailField} />
          <InputField {...passwordField} />
          {isErrorDisplayed ? (
            <p className="login-error">
              Invalid email or password, please try again
            </p>
          ) : null}
          <button
            type="submit"
            className="pill-shape login-submit"
            data-testid="login-button">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
