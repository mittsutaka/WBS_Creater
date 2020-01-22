import {ListActionType} from "../models/List";
import { IProject } from "../models/Db";

export const FecthAction = (projects:IProject[])=>({
  type:ListActionType.Fecth,
  payload:{projects:projects}
})