import React from "react";

import dayjs from "dayjs";
import { MenuVertical, Clock } from "neetoIcons";
import { Dropdown, Tag, Avatar, Tooltip } from "neetoui/v2";

import { USR_IMG_TMP } from "../../../Common/Sidebar/constants";

dayjs.extend(require("dayjs/plugin/relativeTime"));

const getTimeSince = timestamp => {
  const date = new Date(timestamp);
  return dayjs(date).fromNow();
};

const formatDate = timestamp => {
  const date = new Date(timestamp);
  return dayjs(date).format("dddd, hh:mm A");
};

function Card({ note, setSelectedNoteId, setShowDeleteAlert }) {
  return (
    <div className="border neeto-ui-shadow-s px-3.5 py-4 mb-4">
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
      <p className="neeto-ui-text-gray-600 mb-3 pb-3 border-b-2 border-gray-100">
        {note.description}
      </p>
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
              imageUrl: USR_IMG_TMP,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
