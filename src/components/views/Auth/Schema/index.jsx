import { boolean, object, string } from 'yup';
// if you want to change the password strong
// export const passwordRegexStrong = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#*$%^&])(?=.{8,})/;

export const passwordRegexMedium = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{6,})/;

export const SchemaLogin = object().shape({
  email:
    string()
      .email("Invalid email")
      .required("Email is required"),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
export const Schema = object().shape({
  fname:
    string()
      .min(6, "Name should be more than 6 characters long")
      .max(20)
      .required("Name is required"),
  lname:
    string()
      .min(6, "Surname should be more than 6 characters long")
      .max(20)
      .required("Name is required"),
  email:
    string()
      .email("Invalid email")
      .required("Email is required"),
  password:
    string()
      .min(8, "Password must be at least 8 characters long")
      .matches(passwordRegexMedium, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character")
      .required("Password is required"),
  agree:
    boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions"),
});

