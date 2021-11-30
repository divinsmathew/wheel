import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoIcons";
import { Button, Input, Alert, Toastr } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import { DUMMY_CONTACTS } from "./constants";
import ContactList from "./ContactList";
import Menu from "./Menu";
import NewContactPane from "./Pane/CreateContact";

function Contacts() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [contacts, setContacts] = useState(DUMMY_CONTACTS);

  const handleDelete = async () => {
    setIsDeleting(true);
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== selectedContactId)
    );
    setIsDeleting(false);
    setIsDeleteAlertOpen(false);
    Toastr.success("Contact deleted successfully.");
  };

  return (
    <section className="flex w-full">
      <section>
        <Menu all={contacts.length} isMenuOpen={isMenuOpen} />
      </section>
      <Container>
        <Header
          title="All Contacts"
          menuBarToggle={() => setIsMenuOpen(value => !value)}
          actionBlock={
            <>
              <Input
                className="mr-4 w-72"
                placeholder="Search Name, Email, Phone Number, Ect."
              />
              <Button
                label="New Contact"
                icon={Plus}
                onClick={() => setShowNewContactPane(value => !value)}
              />
            </>
          }
        />
        {contacts.length ? (
          <ContactList
            setSelectedContactId={setSelectedContactId}
            setShowDeleteAlert={setIsDeleteAlertOpen}
            contacts={contacts}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any contacts!"
            subtitle="Add your contacts to send customized emails to them."
            primaryAction={() => setShowNewContactPane(value => !value)}
            primaryActionLabel="Add New Contact"
          />
        )}
        {isDeleteAlertOpen && (
          <Alert
            isOpen
            onSubmit={handleDelete}
            onClose={() => setIsDeleteAlertOpen(false)}
            message="Are you sure you want to delete this contact? This cannot be undone."
            title={`Delete Contact`}
            isSubmitting={isDeleting}
          />
        )}
      </Container>
      <NewContactPane
        showPane={showNewContactPane}
        setShowPane={setShowNewContactPane}
        setContacts={setContacts}
      />
    </section>
  );
}

export default Contacts;
