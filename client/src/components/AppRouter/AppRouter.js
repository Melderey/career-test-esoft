import { Route, Switch, Redirect } from "react-router-dom";
import {
  GUEST_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  OPERATOR_ROUTE,
} from "../../constants";
import GuestChat from "../GuestChat/GuestChat";
import Login from "../Login/Login";
import OperatorChat from "../OperatorChat/OperatorChat";
import Main from "../Main/Main";

const AppRouter = () => {
  return (
    <Switch>
      <Route 
        key={MAIN_ROUTE} 
        path={MAIN_ROUTE} 
        component={Main} 
        exact={true} 
      />
      <Route
        key={GUEST_ROUTE}
        path={GUEST_ROUTE}
        component={GuestChat}
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
