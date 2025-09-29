import * as Yup from "yup";

const validationScheme = Yup.object().shape({
  name: Yup.string()
    .min(2, "Your name should have at least 2 symbols")
    .max(20, "Your name is too long")
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'-]+$/, "You can't use special symbols")
    .required("This field is required"),

  email: Yup.string()
    .min(2, "Your email should have at least 2 symbols")
    .max(50, "Your email is too long")
    .matches(/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/, "Please write correct email")
    .required("This field is required"),

  phone: Yup.string()
    .min(10, "Your phone number should have at least 10 symbols")
    .max(20, "Your phone number is too long")
    .matches(/^\+?\d{10,15}$/, "Your phone number is incorrect")
    .required("This field is required"),
  partner1: Yup.string()
    .min(2, "First partner name should have at least 2 symbols")
    .max(20, "First partner name is too long")
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'-]+$/, "You can't use special symbols")
    .required("This field is required"),

  partner2: Yup.string()
    .min(2, "Second partner name should have at least 2 symbols")
    .max(20, "Second partner name is too long")
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'-]+$/, "You can't use special symbols")
    .required("This field is required"),

  date: Yup.string()
    .matches(/^\d{2}-\d{4}$/, "Date must be in format MM-YYYY")
    .required("This field is required"),

  guests: Yup.number()
    .typeError("Guests must be a number")
    .min(1, "At least 1 guest required")
    .max(500, "Too many guests")
    .required("This field is required"),

  additionalInfo: Yup.string().max(100, "Additional info is too long"),
});

export { validationScheme };
