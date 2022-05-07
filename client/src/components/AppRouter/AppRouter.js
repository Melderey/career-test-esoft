import { Route, Switch, Redirect } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../../constants";
import { privateRouts, publicRouts } from "../../routers";

const AppRouter = () => {
  const isUserAuth = true;

  return isUserAuth ? (
    <Switch>
      {privateRouts.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRouts.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
