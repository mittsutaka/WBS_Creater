import {IWbs} from "./Db";

export enum ListActionType {
    Fecth = "FETCH_LIST"
  }

export interface IListState{
    Register:{
        wbsList:IWbs[]
    }
}

export interface IListAction{
    type:ListActionType,
    payload:any
}