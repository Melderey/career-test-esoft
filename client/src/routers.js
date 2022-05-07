import { CHAT_ROUTE, LOGIN_ROUTE } from "./constants";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";

export const privateRouts = [
  {
    patch: CHAT_ROUTE,
    Component: Chat,
  },
];

export const publicRouts = [
  {
    patch: LOGIN_ROUTE,
    Component: Login,
  },
];
