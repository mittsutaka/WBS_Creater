import { IWbs } from "../models/db";

export enum ActionTypes {
  Register = "REGISTER_WBS",
  Test = "TEST"
}

export interface IRegisterAction {
  type: ActionTypes.Register;
  payload:IWbs;
}

//WBSを登録するAction
export const registerWbs = (name: string) => ({
  type: ActionTypes.Register,
  payload: { name }
});

export const RegisterActions = {
  registerWbs
};
