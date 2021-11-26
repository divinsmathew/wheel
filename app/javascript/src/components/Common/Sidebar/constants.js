import { Text, Settings, NeetoInsights } from "@bigbinary/neeto-icons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Text,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: Settings,
  },
  {
    label: "Reports",
    to: "/reports",
    icon: NeetoInsights,
  },
];
