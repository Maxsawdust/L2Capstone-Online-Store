import "./SignUp.css";
import { useFormik } from "formik";
import { InputField } from "../../components";
import Field from "../../utils/FieldClass";
import * as Yup from "yup";
import { validationSchema } from "../../utils/validationSchema";

export default function SignUp() {
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
      console.log(values);
    },

    // these stop validation occuring before submission
    validateOnBlur: false,
    validateOnChange: false,

    // using yup to validate the form
    validationSchema: Yup.object({
      ...validationSchema,
    }),
  });

  const fields = {
    name: new Field("name", "Enter your name", "text", formik),
    email: new Field("email", "Enter your email", "email", formik),
    password: new Field(
      "password",
      "Enter a secure password",
      "password",
      formik
    ),
    confirmPassword: new Field(
      "confirmPassword",
      "Please confirm your password",
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
