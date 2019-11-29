export enum ActionTypes {
  Register = "REGISTER_WBS"
}

export interface IRegisterAction {
  type: ActionTypes.Register;
}

//WBSを登録するAction
const registerWbs = (id: number, name: string) => ({
  type: ActionTypes.Register,
  payload: { id, name }
});

export const RegisterActions = registerWbs;
