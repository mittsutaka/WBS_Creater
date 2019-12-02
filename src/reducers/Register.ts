import { IRegisterAction, ActionTypes } from "../actions/Register";
import { IRegisterState } from "../models/Register";

const initialState: IRegisterState = {
  id: 0,
  name: "新規登録"
};

export default (state = initialState, action: IRegisterAction): IRegisterState => {
  switch (action.type) {
    case ActionTypes.Register: {
      return { ...state, id: state.id, name: state.name };
    }
    default: {
      return state;
    }
  }
};
