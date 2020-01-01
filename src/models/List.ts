import {IWbs} from "./Common";

export interface IListProps{
    Lists:IList[]
}

export interface IList{
    name:string,
    wbses:string[]
}

export interface IListState{
    Register:{
        wbsList:IWbs[]
    }
}