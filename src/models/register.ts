export interface IRegisterProps{
    wbsLists :IRegisterState[],
    onClickButton:any,
}

export interface IRegisterState{
    wbsList?:IWbs[];
    id?:number;
    name?:string;
}

export interface IWbs{
    id:number;
    name:string;
}
