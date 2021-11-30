import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoIcons";
import { Button, Input, Alert, Toastr } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import { DUMMY_CONTACTS } from "./constants";
import ContactList from "./ContactList";
import Menu from "./Menu";
import CreateContact from "./Pane/CreateContact";

const R = require("ramda");

function Contacts() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);
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
    <div className="flex overflow-y-auto flex-col flex-grow justify-start items-start h-screen">
      <div className="flex w-full">
        <Menu all={contacts.length} isMenuOpen={isMenuOpen} />
        <div className="overflow-auto w-full">
          <div className="mx-5 h-full flex flex-col">
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
                    onClick={() => setIsNewContactPaneOpen(value => !value)}
                  />
                </>
              }
            />
            {R.ifElse(
              () => R.gt(contacts.length, 0),
              () => (
                <ContactList
                  setSelectedContactId={setSelectedContactId}
                  setShowDeleteAlert={setIsDeleteAlertOpen}
                  contacts={contacts}
                />
              ),
              () => (
                <EmptyState
                  image={EmptyNotesListImage}
                  title="Looks like you don't have any contacts!"
                  subtitle="Add your contacts to send customized emails to them."
                  primaryAction={() => setIsNewContactPaneOpen(value => !value)}
                  primaryActionLabel="Add New Contact"
                />
              )
            )(true)}
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
          </div>
        </div>
        <CreateContact
          isNewContactPaneOpen={isNewContactPaneOpen}
          setIsNewContactPaneOpen={setIsNewContactPaneOpen}
          setContacts={setContacts}
        />
      </div>
    </div>
  );
}

export default Contacts;
