import { IRegisterAction, ActionTypes } from "../actions/Register";
import { IRegisterState} from "../models/Register";

const initialState: IRegisterState = {
  wbsList:[
    {
      id:0,
      name:""
    }
  ]
};

export default (state:IRegisterState = initialState, action: IRegisterAction): IRegisterState => {
  switch (action.type) {
    case ActionTypes.Register: {
      console.log(state);
      console.log(action);
      return { ...state,wbsList:[...state.wbsList,action.payload] };
    }
    default: {
      console.log("実行");
      return state;
    }
  }
};
