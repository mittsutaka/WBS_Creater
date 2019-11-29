import { Action } from "redux";

enum ActionTypes {
  LOGIN = "LOGIN"
}

export interface LoginAction extends Action {
  type: ActionTypes.LOGIN;
  payload: {
    email: string;
    password: string;
  };
}

export const Login = (email: string, password: string): LoginAction => ({
  type: ActionTypes.LOGIN,
  payload: {
    email,
    password
  }
});
