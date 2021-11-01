import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templete/HeaderLayout";
import { Home } from "../components/pages/Home";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        render={() => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route key={route.path} exact={route.exact} path={route.path}>
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
