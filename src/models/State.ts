import { IProject } from "./Db"

export interface IAppState{
    List:{
        projects:IProject[]
    }
}