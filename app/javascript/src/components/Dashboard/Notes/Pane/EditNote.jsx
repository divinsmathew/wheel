import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Form from "./Form";

export default function EditNotePane({
  fetchNotes,
  isEditNotePaneOpen,
  setIsEditNotePaneOpen,
  note,
}) {
  const onClose = () => setIsEditNotePaneOpen(false);

  return (
    <Pane isOpen={isEditNotePaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Note
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} refetch={fetchNotes} note={note} isEdit={true} />
    </Pane>
  );
}
