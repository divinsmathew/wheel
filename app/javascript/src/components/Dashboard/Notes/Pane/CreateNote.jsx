import React from "react";

import { Pane, Typography } from "neetoui/v2";

import { NOTES_FORM_INITIAL_VALUES } from "./constants";
import Form from "./Form";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={fetchNotes}
        note={NOTES_FORM_INITIAL_VALUES}
        isEdit={false}
      />
    </Pane>
  );
}
