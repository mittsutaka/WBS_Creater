import { IWorks } from "../models/Db";

export enum ActionTypes {
  Register = "REGISTER_WBS",
  Test = "TEST"
}

export interface IRegisterAction {
  type: ActionTypes.Register;
  payload:IWorks;
}

//WBSを登録するAction
export const registerWbs = (name: string) => ({
  type: ActionTypes.Register,
  payload: { name }
});

export const RegisterActions = {
  registerWbs
};
