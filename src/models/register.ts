export interface IRegisterState {
  id: number;
  name: string;
}

export interface IRegisterActions {
  registerWbs: () => any;
  test: (v:string) => any;
}

interface OwnProps {}

export type RegisterProps = OwnProps & IRegisterState & IRegisterActions;
