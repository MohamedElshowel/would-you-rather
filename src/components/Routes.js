import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import Poll from "./Poll";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

function Routes({ authedUser }) {
  const getRedirectComponent = (redirectTo) => (
    <Redirect
      to={{
        pathname: "/login",
        state: { redirectTo },
      }}
    />
  );

  return (
    <Switch>
      <Route path="/login" exact component={Login} />

      <Route path={["/", "/home"]} exact>
        {authedUser ? <Home /> : getRedirectComponent("/home")}
      </Route>

      <Route path={["/add", "/new"]} exact>
        {authedUser ? <NewQuestion /> : getRedirectComponent("/add")}
      </Route>

      <Route path="/leaderboard" exact>
        {authedUser ? <LeaderBoard /> : getRedirectComponent("/leaderboard")}
      </Route>

      <Route path="/questions/:id">
        {authedUser ? <Poll /> : getRedirectComponent("/notfound")}
      </Route>

      <Route>
        {authedUser ? <NotFound /> : getRedirectComponent("/notfound")}
      </Route>
    </Switch>
  );
}

export default Routes;
