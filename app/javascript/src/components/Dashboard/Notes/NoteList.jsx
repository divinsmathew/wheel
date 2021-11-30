import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import { MenuVertical, Clock } from "neetoIcons";
import { Dropdown, Tag, Avatar, Tooltip } from "neetoui/v2";

import Card from "./Card";
import EditNotePane from "./Pane/EditNote";

import { TEMP_USER_PROFILE_IMAGE_URL } from "../../Common/Sidebar/constants";

const R = require("ramda");

dayjs.extend(require("dayjs/plugin/relativeTime"));

const getTimeSince = timestamp => {
  const date = new Date(timestamp);
  return dayjs(date).fromNow();
};

const formatDate = timestamp => {
  const date = new Date(timestamp);
  return dayjs(date).format("dddd, hh:mm A");
};

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

  useEffect(() => {
    const getActiveNote = () => notes.find(note => note.id === selectedNoteId);
    const selectedNote = getActiveNote();
    setSelectedNote(selectedNote);
  }, [selectedNoteId]);
  return (
    <>
      <div className="w-full notes-table-height">
        {R.gt(notes.length, 0) &&
          notes.map(note => (
            <Card key={note.id}>
              <Card.Header>
                <div className="flex">
                  <h4>{note.title}</h4>
                  <div className="ml-auto">
                    <Dropdown buttonStyle="text" icon={MenuVertical}>
                      <li
                        onClick={() => {
                          setSelectedNoteId(note.id);
                        }}
                      >
                        Edit
                      </li>
                      <li
                        onClick={() => {
                          setSelectedNoteId(note.id);
                          setShowDeleteAlert(true);
                        }}
                      >
                        Delete
                      </li>
                    </Dropdown>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>{note.description}</Card.Body>
              <Card.Footer>
                <div className="flex">
                  <div className="labels">
                    <Tag className="bg-gray-100" label="Getting Started" />
                  </div>
                  <div className="ml-auto flex items-center">
                    <Clock color="#1e1e20" size={14} />
                    <Tooltip
                      position="bottom-start"
                      content={formatDate(note.created_at)}
                    >
                      <span className="neeto-ui-text-gray-600 ml-1 mr-2 text-xs">
                        Created {getTimeSince(note.created_at)}
                      </span>
                    </Tooltip>
                    <Avatar
                      size="small"
                      user={{
                        name: "Ashley Cooper",
                        imageUrl: TEMP_USER_PROFILE_IMAGE_URL,
                      }}
                    />
                  </div>
                </div>
              </Card.Footer>
            </Card>
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
