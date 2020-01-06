import { IListState, IListAction, ListActionType } from "../models/List";

const initialState: IListState = {
  Register: {
    wbsList: [
      {
        id: 0,
        name: "",
        large_class: "",
        small_class: "",
        status: 1,
        progress: "wait"
      }
    ]
  }
};

export default (state: IListState = initialState, action: IListAction) => {
  console.log("reducer");
  switch (action.type) {
    case ListActionType.Fecth:
      return { state };
    default:
      return state;
  }
};
