import {IWbs} from "./Common";

export interface IRegisterProps{
    wbsLists :IRegisterState[],
    onClickButton:any,
}

export interface IRegisterState{
    wbsList?:Array<IWbs>;
}