import React, { useEffect, useState } from "react";

import Card from "./Card";
import EditNotePane from "./Pane/EditNote";

const R = require("ramda");

const NoteList = ({
  setSelectedNoteId,
  selectedNoteId,
  setShowDeleteAlert,
  notes = [],
  fetchNotes,
}) => {
  const [isEditNotePaneOpen, setIsEditNotePaneOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(
    notes.find(n => n.id === selectedNoteId)
  );
  const getActiveNote = () => notes.find(note => note.id === selectedNoteId);

  useEffect(() => {
    const selectedNote = getActiveNote();
    setSelectedNote(selectedNote);
  }, [selectedNoteId, getActiveNote]);
  return (
    <>
      <div className="w-full notes-table-height">
        {R.gt(notes.length, 0) &&
          notes.map(note => (
            <Card
              setSelectedNoteId={setSelectedNoteId}
              setShowDeleteAlert={setShowDeleteAlert}
              key={note.id}
              note={note}
            />
          ))}
      </div>
      <EditNotePane
        isEditNotePaneOpen={isEditNotePaneOpen}
        setIsEditNotePaneOpen={setIsEditNotePaneOpen}
        fetchNotes={fetchNotes}
        note={selectedNote}
      />
    </>
  );
};

export default NoteList;
