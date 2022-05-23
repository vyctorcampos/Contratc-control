export interface IContract {
  id: number;
  register_date: string;
  validate_date: string;
}

export interface IUser {
  name: string;
  cpf: string;
  cep: number;
  contract: IContract;
}

export type UserContextType = {
  users: IUser[];
  saveUser: (user: IUser) => void;
};
