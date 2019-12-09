export enum ActionTypes {
  Register = "REGISTER_WBS"
}

export interface IRegisterAction {
  type: ActionTypes.Register;
  payload:{
    id:number,
    name:string,
  }
}

//WBSを登録するAction
export const registerWbs = (id: number, name: string) => ({
  type: ActionTypes.Register,
  payload: { id, name }
});
