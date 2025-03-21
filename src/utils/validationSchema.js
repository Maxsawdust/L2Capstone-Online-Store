import * as Yup from "yup";

// keeping my validation logic in here to keep other components clean
export const validationSchema = {
  // with each key, I use "Yup.string", for basic validation of their data type.
  name: Yup.string()
    // all fields use "required()" to make sure they have input
    .required("First name is required")
    // names are validated to only contain numbers
    .matches(/^[a-zA-Z]+$/, "Name can only include letters")
    // names are validated to be no more than 20 chars
    .max(20, "Name cannot exceed 20 characters"),

  email: Yup.string()
    .required("Email is required")
    // .email validates for a valid email address
    .email("Please enter a valid email address"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    /* instead of one big regex, I split these up into many smaller ones,
       so that the user knows what they specifically need to change */
    .matches(/(?=.*\d)/, "Password must contain a number")
    .matches(/(?=.*[a-z])/, "Password must contain a lower-case letter")
    .matches(/(?=.*[A-Z])/, "Password must contain a capital letter")
    .matches(/(?=.*[!@#$%^&*-])/, "Password must contain a special character"),

  confirmPassword: Yup.string()
    // oneOf can take a reference to another field to make sure they're the same.
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
};
