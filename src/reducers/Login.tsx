import {LoginAction} from "../actions/Login";

interface LoginState {
  isAuth: boolean;
}

const initialstate: LoginState = {
  isAuth: false
};

export default (state = initialstate, action:LoginAction) => {
  switch (action.type) {
    case "LOGIN":
      return {};
      break;

    default:
      break;
  }
};
