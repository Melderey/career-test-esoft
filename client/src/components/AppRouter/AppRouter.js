import { Route, Switch, Redirect } from "react-router-dom";
import {
  CHAT_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  OPERATOR_ROUTE,
} from "../../constants";
import UserChat from "../UserChat/UserChat";
import Login from "../Login/Login";
import OperatorChat from "../operatorChat/operatorChat";

const AppRouter = () => {
  return (
    <Switch>
      <Route
        key={CHAT_ROUTE}
        path={CHAT_ROUTE}
        component={UserChat}
        exact={true}
      />
      <Route
        key={LOGIN_ROUTE}
        path={LOGIN_ROUTE}
        component={Login}
        exact={true}
      />
      <Route
        key={OPERATOR_ROUTE}
        path={OPERATOR_ROUTE}
        component={OperatorChat}
        exact={true}
      />
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;

// const AppRouter = () => {
//   const isAuth = true;

//   return isAuth ? (
//     <Switch>
//       <Route
//         key={CHAT_ROUTE}
//         path={CHAT_ROUTE}
//         component={UserChat}
//         exact={true}
//       />
//       <Redirect to={CHAT_ROUTE} />
//     </Switch>
//   ) : (
//     <Switch>
//       <Route
//         key={LOGIN_ROUTE}
//         path={LOGIN_ROUTE}
//         component={Login}
//         exact={true}
//       />
//       <Redirect to={LOGIN_ROUTE} />
//     </Switch>
//   );
// };
