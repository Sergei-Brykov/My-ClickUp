import { Route, Switch } from "react-router-dom";
import { routes } from "../pages/routers";

export function MainRoutes() {
  return (
    <Switch>
      {routes.map(({ path, exact, component }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
    </Switch>
  );
}
