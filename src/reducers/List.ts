import { IListState, IListAction, ListActionType } from "../models/List";

const initialState: IListState = {
  projects: [
    {
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
        return {...state,projects:state.projects.concat(action.payload.project)}
    default:
      return state;
  }
};
