export const PORT = process.env.PORT || 5000;

export const MAIN_ROUTE = "/main";
export const CHAT_ROUTE = "/user_chat";
export const OPERATOR_ROUTE = "/operator_chat";
export const LOGIN_ROUTE = "/login";

export const USER_URL = `ws://localhost:${PORT}${"/user_chat"}`;
