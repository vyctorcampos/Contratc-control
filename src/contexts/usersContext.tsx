import React, { createContext, useMemo } from 'react';

import { IUser, UserContextType } from '../@types/IUser';

export const UsersContext = createContext<UserContextType | null>(null);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = React.useState<IUser[]>([
    {
      name: 'Jamaal',
      cpf: '5474381786',
      cep: 59359945,
      contract: {
        id: 1,
        register_date: '24/05/2021',
        validate_date: '18/08/2021',
      },
    },
    {
      name: 'Arthur Lira',
      cpf: '3444383780',
      cep: 59090345,
      contract: {
        id: 1,
        register_date: '21/03/2021',
        validate_date: '11/02/2024',
      },
    },
  ]);

  const saveUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  const UsersContextProvider = useMemo(
    () => ({ users, saveUser }),
    // eslint-disable-next-line prettier/prettier
    [users, saveUser]
  );

  return (
    <UsersContext.Provider value={UsersContextProvider}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
