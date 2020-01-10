import { Dispatch } from "redux";
import {ListActionType} from "../models/List";
import {FetchDatabase} from "../apis/Firebase";
import { IProject } from "../models/Db";

const FecthAction = (projects:IProject[])=>({
  type:ListActionType.Fecth,
  payload:{projects:projects}
})

export const FecthList = () => {
  return (dispatch: Dispatch) => {
    FetchDatabase().then((res)=>{
      let projects:IProject[]=[{
        id:1,name:"test"
      },{
        id:2,name:"test2"
      }];
      console.log(res);
      dispatch(FecthAction(projects));
    })
  };
};
