import React from "react";

import { Pane, Typography } from "neetoui/v2";

import FillContact from "./FillContact";

export default function CreateContact({
  isNewContactPaneOpen,
  setIsNewContactPaneOpen,
  setContacts,
}) {
  const onClose = () => setIsNewContactPaneOpen(false);

  return (
    <Pane isOpen={isNewContactPaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <FillContact setContacts={setContacts} onClose={onClose} />
    </Pane>
  );
}
