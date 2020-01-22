import { firebaseDb } from "../firebase";
import { FecthAction } from "../actions/List";
import { IProject } from "../models/Db";
import { Dispatch } from "react";

export const FecthList = (dispatch: Dispatch<any>) => {
  let projectRef = firebaseDb.collection("Projects");
  projectRef
    //.where("creator", "==", "mitsutaka")
    .get()
    .then(snapshot => {
      let projects: IProject[] = [];
      snapshot.forEach(function(doc) {
        projects.push(doc.data() as IProject);
      });
      dispatch(FecthAction(projects));
    });
};
