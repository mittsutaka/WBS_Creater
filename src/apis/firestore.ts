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

export const RegisterProject = (project: IProject) => {
  let projectRef = firebaseDb.collection("Projects");
  projectRef.doc().set(project);
};

export const FecthProject = (id: string):Promise<IProject> => {
  return new Promise((resolve,reject)=>{
    let projectRef = firebaseDb.collection("Projects");
    let project:IProject;
    projectRef
      .where('id', '==', id)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          project = doc.data() as IProject;
        });
        resolve(project);
      });
  })
};
