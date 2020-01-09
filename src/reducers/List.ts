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
      return { ...state };
    default:
      return state;
  }
};
