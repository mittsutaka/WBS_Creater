export enum ActionTypes {
  Register = "REGISTER_WBS",
  Test = "TEST"
}

export interface IRegisterAction {
  type: ActionTypes.Register;
  payload: {
    id: number;
    name: string;
  };
}

//WBSを登録するAction
export const registerWbs = (id: number, name: string) => ({
  type: ActionTypes.Register,
  payload: { id,name }
});

export const RegisterActions = {
  registerWbs
};
