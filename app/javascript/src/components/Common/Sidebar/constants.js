import { Text, UserCircle, NeetoInsights } from "neetoIcons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";
export const TEMP_USER_PROFILE_IMAGE_URL =
  "https://randomuser.me/api/portraits/med/women/54.jpg";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Text,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: "Reports",
    to: "/reports",
    icon: NeetoInsights,
  },
];
