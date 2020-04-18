import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { fireapp } from "../firebase/fireapp";

export type AuthRouteProps = {
  access?: "auth" | "noauth";
  noAccessPath?: string;
} & RouteProps;

export const AuthRoute = (props: AuthRouteProps) => {
  if (props.access === undefined) props.access = "auth";

  const { access, noAccessPath, ...routeProps } = props;
  const [user, loading, error] = useAuthState(fireapp.auth!() as any);

  if (loading) return null;

  if (props.access === "auth") {
    if (user) return <Route {...routeProps} />;
    return <Redirect to="/welcome" />;
  } else {
    if (user) return <Redirect to={noAccessPath ?? "/"} />;
    return <Route {...routeProps} />;
  }
};
