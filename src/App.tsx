import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { LANDING_ROUTE_PATH } from "./features/landing/const";
import Landing from "./features/landing/Landing";

function App() {
  return (
    <HashRouter>
      <Route path={LANDING_ROUTE_PATH}>
        <Landing/>
      </Route>
      <Route path={"*"}>
        <Redirect to={"/welcome"} />
      </Route>
    </HashRouter>
  );
}

export default App;
