import { IListState, IListAction, ListActionType } from "../models/List";
import {RegisterProject} from "../apis/firestore";

const initialState: IListState = {
  projects: [
    {
      id:0,
      name: "",
      created_at:new Date(),
      creator:"",
      updated_at:new Date()
    }
  ]
};

export default (state: IListState = initialState, action: IListAction) => {
  switch (action.type) {
    case ListActionType.Fecth:
      return { ...state, projects:action.payload.projects};
      case ListActionType.RegisterProject:
        RegisterProject(action.payload.project);
        return {...state,projects:state.projects.concat(action.payload.project)}
    default:
      return state;
  }
};
