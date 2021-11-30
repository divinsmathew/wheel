import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoIcons";
import { Button, PageLoader, Input, Alert } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import NotesMenu from "./Menu";
import NoteList from "./NoteList";
import NewNotePane from "./Pane/CreateNote";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [notes, setNotes] = useState([]);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await notesApi.destroy({ ids: [selectedNoteId] });
      setSelectedNoteId(0);
      fetchNotes();
    } catch (error) {
      logger.error(error);
    } finally {
      setShowDeleteAlert(false);
      setIsDeleting(false);
    }
  };
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <section className="flex w-full">
      <section>
        <NotesMenu isMenuBarOpen={isMenuBarOpen}></NotesMenu>
      </section>
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => setIsMenuBarOpen(value => !value)}
          actionBlock={
            <>
              <Input
                className="mr-4 w-72"
                placeholder="Search Name, Email, Phone Number, Ect."
              />
              <Button
                onClick={() => setShowNewNotePane(true)}
                label="Add New Note"
                icon={Plus}
              />
            </>
          }
        />
        {notes.length ? (
          <NoteList
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            setShowDeleteAlert={setShowDeleteAlert}
            notes={notes}
            fetchNotes={fetchNotes}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
        {showDeleteAlert && (
          <Alert
            isOpen
            onSubmit={handleDelete}
            onClose={() => setShowDeleteAlert(false)}
            message="Are you sure you want to delete this note? This cannot be undone."
            title={`Delete Note`}
            isSubmitting={isDeleting}
          />
        )}
      </Container>
    </section>
  );
};

export default Notes;
