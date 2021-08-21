import React, { ChangeEvent, useState, ReactElement, FormEvent } from 'react';
import Navbar from 'components/Navbar';
import Form from 'components/Form';
import BaseInput from 'components/BaseInput';
import Button from 'components/Button';

type FormType = {
  login: string;
  password: string;
};

const Login: React.FC = (): ReactElement => {
  const [fields, handleChange] = useState<FormType>({
    login: '',
    password: '',
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const resetForm = () => {
    const formFields = Object.keys(fields);
    const newState = formFields.reduce(
      (acc, field) => ({ ...acc, [field]: '' }),
      {},
    );

    handleChange(newState as FormType);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 justify-center items-center">
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange((values) => ({ ...values, login: e.target.value }))
            }
            placeholder="Логин"
            required
          />
          <BaseInput
            className="mb-2"
            value={fields.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange((values) => ({
                ...values,
                password: e.target.value,
              }))
            }
            placeholder="Пароль"
            type="password"
            required
          />
        </Form>
      </main>
    </div>
  );
};

export default Login;
