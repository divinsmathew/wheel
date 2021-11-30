import * as Yup from "yup";

export const NOTES_FORM_VALIDATIONS = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  contact: Yup.object().required("Assigned contact is required"),
  tags: Yup.object().required("Tag is required"),
});

export const NOTES_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  contact: "",
  tags: "",
};

export const ASSIGNED_CONTACTS_OPTS = [
  {
    label: "User One",
    value: "value1",
  },
  {
    label: "User Two",
    value: "value2",
  },
  {
    label: "User Three",
    value: "value3",
  },
];

export const ROLE_TAG_OPTS = [
  {
    label: "Getting Started",
    value: "value1",
  },
  {
    label: "Onboarding",
    value: "value2",
  },
  {
    label: "User Flow",
    value: "value3",
  },
  {
    label: "UX",
    value: "value4",
  },
  {
    label: "Bugs",
    value: "value5",
  },
  {
    label: "V2",
    value: "value6",
  },
];
