import React from "react";
import { Route, Redirect } from "react-router";

interface Props{
  flag:boolean
}

const Auth: React.FC = (props) => {
  return false ? <Redirect to={"/login"} /> : <Route children={props.children} />;
};

export default Auth;
