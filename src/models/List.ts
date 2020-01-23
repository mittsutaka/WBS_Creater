import { IProject } from "./Db";

export enum ListActionType {
  Fecth = "FETCH_LIST",
  RegisterProject = "REGISTER_PROJECT",
}

export interface IListState {
   projects: IProject[] ;
}

export interface IListAction {
  type: ListActionType;
  payload: {
    projects:IProject[],
    project:IProject
  };
}
