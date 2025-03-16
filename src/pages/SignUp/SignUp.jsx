import "./SignUp.css";
import { useFormik } from "formik";
import { InputField } from "../../components";
import Field from "../../utils/FieldClass";
import * as Yup from "yup";
import { validationSchema } from "../../utils/validationSchema";
import { User } from "../../utils/UserClass";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  // using formik to handle form validation
  const formik = useFormik({
    // defining intial values
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // creating a new user object on submit
    onSubmit: (values) => {
      // initialising users array
      let users = [];
      // checking if users already exists in localStorage
      const savedUsers = localStorage.getItem("users");
      // setting the users array to existing users if it does
      if (savedUsers) {
        users = JSON.parse(savedUsers);
      }

      // pushing a new User to the array
      users.push(new User(values.name, values.email, values.password));

      // updating localStorage to reflect the new user
      localStorage.setItem("users", JSON.stringify(users));

      navigate("/login");
    },

    // these stop validation occuring before submission
    validateOnBlur: false,
    validateOnChange: false,

    // using yup to validate the form
    validationSchema: Yup.object({
      ...validationSchema,
      // custom validation to check that email has not already been used
      email: validationSchema.email.test(
        "unique-email",
        "There is already an account with this email",
        (value) => {
          let users = [];
          const savedUsers = localStorage.getItem("users");
          if (savedUsers) {
            users = JSON.parse(savedUsers);
          }

          // returning the inverse of users.some again the email value
          return !users.some((user) => user.email === value);
        }
      ),
    }),
  });

  const fields = {
    name: new Field("name", "Enter your name", "text", formik),
    email: new Field("email", "Enter your email", "text", formik),
    password: new Field(
      "password",
      "Enter a secure password",
      "password",
      formik
    ),
    confirmPassword: new Field(
      "confirmPassword",
      "Confirm your password",
      "password",
      formik
    ),
  };

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <div className="signup-container">
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <InputField {...fields.name} />
          <InputField {...fields.email} />
          <InputField {...fields.password} />
          <InputField {...fields.confirmPassword} />
          <button type="submit" className="pill-shape sign-up-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
