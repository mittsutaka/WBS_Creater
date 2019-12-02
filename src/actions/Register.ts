export enum ActionTypes {
  Register = "REGISTER_WBS",
  Test = "TEST"
}

export interface IRegisterAction {
  type: ActionTypes.Register;
}

//WBSを登録するAction
const registerWbs = (id: number, name: string) => ({
  type: ActionTypes.Register,
  payload: { id, name }
});

const test = (text: string) => ({
  type: ActionTypes.Test
});

export const RegisterActions = {
  registerWbs
};