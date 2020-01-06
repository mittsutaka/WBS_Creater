import { Dispatch } from "redux";
import {ListActionType} from "../models/List";


export const FecthList = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ListActionType.Fecth });
  };
};
