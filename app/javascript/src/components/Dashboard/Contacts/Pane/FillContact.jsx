import React, { useState } from "react";

import dayjs from "dayjs";
import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import {
  ROLE_OPTIONS,
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_VALIDATION_SCHEMA,
} from "./constants";

export default function FillContact({ onClose, setContacts }) {
  const [submitted, setSubmitted] = useState(false);

  const getFormattedDate = () => {
    const date = new Date();
    return dayjs(date).format("MMM, D, YYYY");
  };

  const handleSubmit = values => {
    setContacts(contacts => [
      { ...values, role: values.role.label, createdAt: getFormattedDate() },
      ...contacts,
    ]);
    setSubmitted(true);
    onClose();
  };

  return (
    <Formik
      initialValues={CONTACT_FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex justify-between flex-grow-0 w-full gap-x-3.5">
              <Input
                label="First Name"
                name="firstName"
                className="flex-grow-0 w-1/2"
                required
              />
              <Input
                label="Second Name"
                name="secondName"
                className="flex-grow-0 w-1/2"
                rows={8}
                required
              />
            </div>
            <Input
              label="Email Address"
              name="email"
              className="flex-grow-0 w-full"
              rows={8}
              required
            />
            <Select
              isSearchable
              label="Role"
              className="flex-grow-0 w-full"
              name="role"
              required
              options={ROLE_OPTIONS}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
