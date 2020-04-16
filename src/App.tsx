import React from "react";
import { Paper } from "@material-ui/core";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { LANDING_ROUTE_PATH } from "./features/landing/const";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <HashRouter>
      <Route path={LANDING_ROUTE_PATH}>
        <Paper>{t("Hello")}!</Paper>
      </Route>
      <Route path={"*"}>
        <Redirect to={"/welcome"} />
      </Route>
    </HashRouter>
  );
}

export default App;
