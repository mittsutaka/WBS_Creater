import { IRegisterAction, ActionTypes } from "../actions/Register";
import { IRegisterState, IWbs } from "../models/register";

const initialState: IRegisterState = {
  wbsList:[{id:10,name:"初期値"}],
  id: 0,
  name: "新規登録"
};

export default (state = initialState, action: IRegisterAction): IRegisterState => {
  switch (action.type) {
    case ActionTypes.Register: {
      let newWbs:IWbs ={id:action.payload.id,name:action.payload.name}; 
      console.log("あくしょん");
      console.log(state);
      console.log(action);
      return { ...state,id: action.payload.id, name: action.payload.name };
    }
    default: {
      return state;
    }
  }
};
