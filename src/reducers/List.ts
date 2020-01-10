import { IListState, IListAction, ListActionType } from "../models/List";

const initialState: IListState = {
  projects: [
    {
      id: 0,
      name: "test"
    }
  ]
};

export default (state: IListState = initialState, action: IListAction) => {
  console.log("reducer");
  switch (action.type) {
    case ListActionType.Fecth:
      console.log(action);
      return { ...state, projects:action.payload.projects};
    default:
      return state;
  }
};
