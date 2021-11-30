import React from "react";

import { MenuHorizontal } from "neetoIcons";
import { Typography, Avatar, Dropdown, Table } from "neetoui/v2";

const ContactList = ({
  setSelectedContactId,
  setShowDeleteAlert,
  contacts,
}) => {
  const COLUMN_DATA = [
    {
      title: "NAME & ROLE",
      dataIndex: "nameAndRole",
      key: "nameAndRole",
      render: (_, data) => (
        <div className="flex">
          <Avatar
            user={{
              name: `${data.firstName} ${data.secondName}`,
              imageUrl: data.profilePicUrl,
            }}
            size="medium"
            className="mr-3"
          />
          <div>
            <Typography style="h5" weight="semibold">
              {`${data.firstName} ${data.secondName}`}
            </Typography>
            <Typography style="h6" weight="light">
              {data.role}
            </Typography>
          </div>
        </div>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "CREATED AT",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "",
      dataIndex: "options",
      key: "options",
      render: (_, { id }) => (
        <Dropdown
          buttonStyle="text"
          position="bottom-end"
          icon={MenuHorizontal}
        >
          <li
            onClick={() => {
              setSelectedContactId(id);
              setShowDeleteAlert(true);
            }}
          >
            Delete
          </li>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="h-full table-width">
      <Table
        rowData={contacts}
        columnData={COLUMN_DATA}
        currentPageNumber={3}
        defaultPageSize={10}
        totalCount={10}
      />
    </div>
  );
};

export default ContactList;
