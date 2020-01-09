import { Dispatch } from "redux";
import {ListActionType} from "../models/List";
import {FetchDatabase} from "../apis/Firebase";

export const FecthList = () => {
  return (dispatch: Dispatch) => {
    FetchDatabase().then(()=>{
      dispatch({ type: ListActionType.Fecth });
    })
  };
};
