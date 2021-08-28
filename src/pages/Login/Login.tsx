import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';

import BaseInput from 'components/BaseInput';
import Button from 'components/Button';
import Form from 'components/Form';
import Layout from 'components/Layout';

import { LoginFormType } from './types';

const Login: React.FC = (): JSX.Element => {
  const [fields, setFields] = useState<LoginFormType>({
    login: '',
    password: '',
  });

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  const resetForm = useCallback(() => {
    const formFields = Object.keys(fields);
    const newState = formFields.reduce(
      (acc, field) => ({ ...acc, [field]: '' }),
      {},
    );

    setFields(newState as LoginFormType);
  }, [fields]);

  const handleChange = useCallback(
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setFields((values) => ({
        ...values,
        [name]: e.target.value,
      }));
    },
    [],
  );

  return (
    <Layout>
      <Form
        title="Вход"
        onSubmit={onSubmit}
        onReset={resetForm}
        actions={[
          <Button
            key="button-submit"
            className="text-base font-medium rounded-lg p-2 bg-blue-600 text-white"
            type="submit"
          >
            Войти
          </Button>,
          <Button
            key="button-clear"
            className="text-base font-medium p-2 text-gray-600"
            type="reset"
          >
            Очистить
          </Button>,
        ]}
      >
        <BaseInput
          className="mb-2"
          value={fields.login}
          onChange={handleChange('login')}
          placeholder="Логин"
          required
        />
        <BaseInput
          className="mb-2"
          value={fields.password}
          onChange={handleChange('password')}
          placeholder="Пароль"
          type="password"
          required
        />
      </Form>
    </Layout>
  );
};

export default Login;
