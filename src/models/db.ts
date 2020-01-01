export interface IUsers{
    users:IUser[];
}

export interface IUser{
    id:string;
    name:string;
    mail:string;
    pass:string;
}

export interface IProjects{
    projects:IProject[];
}

export interface IProject{
    id:string;
    name:string;
}

export interface IWbsList{
    wbs_list:IWbs[];
}

export interface IWbs{
    id:number;
    name:string;
    large_class:string;
    small_class:string;
    status:number;
    progress:string;
}