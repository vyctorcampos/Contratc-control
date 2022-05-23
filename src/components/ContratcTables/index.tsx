import React, { useContext, useState } from 'react';
import Pagination from '../Pagination';

import usePagination from '../../hooks/usePagination';
import { UsersContext } from '../../contexts/usersContext';
import { UserContextType, IUser } from '../../@types/IUser';

const ContratcTables = () => {
  const { users } = useContext(UsersContext) as UserContextType;
  const [page, setPage] = useState(1);

  const _data = usePagination(
    users,
    // eslint-disable-next-line prettier/prettier
    10
  );

  const count = Math.ceil(users.length / 10);

  const handleChange = (_: any, p: any) => {
    setPage(p);
    _data.jump(p);
  };

  return (
    <>
      <Pagination count={count} page={page} handleChange={handleChange} />
      <div className="table-responsive">
        <table className=" table-responsive table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>N° Contrato</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Cep</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            {_data.currentData().map((item: IUser) => (
              <tr key={`${item.name}`}>
                <td>{item.contract.register_date}</td>
                <td>{item.contract.id}</td>
                <td>{item.name}</td>
                <td>{item.cpf}</td>
                <td>{item.cep}</td>
                <td>{item.contract.validate_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContratcTables;
