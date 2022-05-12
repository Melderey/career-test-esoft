export const PORT = process.env.PORT || 5000;

export const MAIN_ROUTE = "/main";
export const GUEST_ROUTE = "/guest_chat";
export const OPERATOR_ROUTE = "/operator_chat";
export const LOGIN_ROUTE = "/login";
export const USER_URL = `ws://localhost:${PORT}${GUEST_ROUTE}`;

export const GUEST = "Гость";
export const OPERATOR = "Оператор";
