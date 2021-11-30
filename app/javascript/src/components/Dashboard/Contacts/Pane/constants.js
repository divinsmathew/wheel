import * as Yup from "yup";

export const ROLE_OPTIONS = [
  {
    label: "Owner",
    value: "value1",
  },
  {
    label: "Manager",
    value: "value2",
  },
  {
    label: "Admin",
    value: "value3",
  },
];

export const CONTACT_FORM_INITIAL_VALUES = {
  firstName: "",
  secondName: "",
  email: "",
  role: "",
};

export const CONTACT_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("Title is required"),
  secondName: Yup.string().required("Description is required"),
  email: Yup.string().required("Email is required"),
  role: Yup.object().required("Role is required"),
});
