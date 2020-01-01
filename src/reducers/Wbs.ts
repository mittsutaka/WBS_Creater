import { IRegisterAction, ActionTypes } from "../actions/Register";
import {IWbsState} from "../models/Common";

const initialState: IWbsState = {
  wbsList:[
    {
      id:0,
      name:"",
      large_class:"",
      small_class:"",
      status:1,
      progress:"wait"
    }
  ]
};

export default (state:IWbsState = initialState, action: IRegisterAction): IWbsState => {
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
