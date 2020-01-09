import { IProject } from "./Db";

export enum ListActionType {
  Fecth = "FETCH_LIST"
}

export interface IListState {
   projects: IProject[] ;
}

export interface IListAction {
  type: ListActionType;
  payload: any;
}
