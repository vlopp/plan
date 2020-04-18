import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./features/landing/Landing.cmp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/welcome"}>
          <Landing />
        </Route>

        <Route path={"*"}>
          <Redirect to={"/welcome"} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
