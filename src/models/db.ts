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
    name:string;
    creator:string;
    created_at:Date;
    updated_at:Date;
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
    project_id:string;
}