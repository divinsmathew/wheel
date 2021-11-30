import React, { useEffect, useState } from "react";

import Card from "./Card";
import EditNotePane from "./Pane/EditNote";

const NoteList = ({
  setSelectedNoteId,
  selectedNoteId,
  setShowDeleteAlert,
  notes = [],
  fetchNotes,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(
    notes.find(n => n.id === selectedNoteId)
  );
  useEffect(() => {
    setSelectedNote(notes.find(n => n.id === selectedNoteId));
  }, [selectedNoteId]);
  return (
    <>
      <div className="w-full notes-table-height">
        {notes.length > 0 &&
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
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
        note={selectedNote}
      />
    </>
  );
};

export default NoteList;
