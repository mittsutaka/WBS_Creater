import { IRegisterAction, ActionTypes } from "../actions/Register";
import { IRegisterState } from "../models/Register";

const initialState: IRegisterState = {
  project_name: "",
  works: [
    {
      id: 5,
      name: "test",
      large_class:"large",
      small_class:"small",
      progress:"progress",
      status:1,
      project_id:""
    }
  ]
};

export default (state: IRegisterState = initialState, action: IRegisterAction): IRegisterState => {
  switch (action.type) {
    case ActionTypes.Register: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
