/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormHandles, Scope, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Input from '../Inputs/InputText';

import { UsersContext } from '../../contexts/usersContext';

import { UserContextType } from '../../@types/IUser';
import getValidationErrors from '../../utils/getValidationErros';

const FormClient = () => {
  const { saveUser } = useContext(UsersContext) as UserContextType;
  const [contractEnable, setContractEnable] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<FormData> = async (data: any) => {
    formRef.current?.setErrors({});

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
      cpf: Yup.string().required('CPF é obrigatório'),
      cep: Yup.string().required('CEP é obrigatório'),
      contract: Yup.object().shape({
        id: Yup.string().required('ID é obrigatório'),
        register_date: Yup.string().required('Data de cadastro é obrigatório'),
        validate_date: Yup.string().required('Data de validade é obrigatório'),
      }),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      saveUser(data);
      toast.success('Cliente cadastrado com sucesso!');
      navigate('/');
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(e);
        formRef.current?.setErrors(validationErrors);
      }

      toast.error('Erro ao cadastrar cliente!');
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input id="name" name="name" label="Nome do usuário" type="text" />
      <Input id="cpf" name="cpf" label="CPF" type="text" />
      <Input id="cep" name="cep" label="CEP" type="text" />
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="contract_enable"
          id="contract_enable"
          className="form-check-input"
          onChange={() => setContractEnable(!contractEnable)}
          checked={contractEnable}
        />
        <label className="form-check-label" htmlFor="contract_enable">
          Desejo adicionar contrato a esse usuário
        </label>
      </div>
      {contractEnable && (
        <Scope path="contract">
          <Input id="id" name="id" label="Número do contrato" type="number" />
          <Input
            id="register_date"
            name="register_date"
            label="Data de registro"
            type="date"
          />
          <Input
            id="validate_date"
            name="validate_date"
            label="Data de validade"
            type="date"
          />
        </Scope>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export default FormClient;
