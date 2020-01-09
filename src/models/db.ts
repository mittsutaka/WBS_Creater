export interface IUsers{
    users:IUser[];
}

export interface IUser{
    id:number;
    name:string;
    mail:string;
    pass:string;
}

export interface IProjects{
    projects:IProject[];
}

export interface IProject{
    id:number;
    name:string;
}

export interface IWorks{
    works:IWork[];
}

export interface IWork{
    id:number;
    name:string;
    large_class:string;
    small_class:string;
    status:number;
    progress:string;
}