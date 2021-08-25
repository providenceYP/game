import React, { ChangeEvent, useState, ReactElement, FormEvent } from 'react';
import Navbar from 'components/Navbar';
import Form from 'components/Form';
import BaseInput from 'components/BaseInput';
import Button from 'components/Button';
import { FormType } from './types';

const Signup: React.FC = (): ReactElement => {
  const [fields, setFields] = useState<FormType>({
    firstName: '',
    secondName: '',
    login: '',
    email: '',
    password: '',
    phone: '',
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const resetForm = () => {
    setFields((state: FormType): FormType => {
      const formFields = Object.keys(state);
      const newState = formFields.reduce(
        (acc, field) => ({ ...acc, [field]: '' }),
        {},
      );

      return newState as FormType;
    });
  };

  const handleChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFields((values) => ({
      ...values,
      [name]: e.target.value,
    }));
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 justify-center items-center">
        <Form
          title="Регистрация"
          onSubmit={onSubmit}
          onReset={resetForm}
          actions={[
            <Button
              key="button-submit"
              className="text-base font-medium rounded-lg p-2 bg-blue-600 text-white"
              type="submit"
            >
              Зарегистрироваться
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
            value={fields.firstName}
            onChange={handleChange('firstName')}
            placeholder="Имя"
            required
          />
          <BaseInput
            className="mb-2"
            value={fields.secondName}
            onChange={handleChange('secondName')}
            placeholder="Фамилия"
            required
          />
          <BaseInput
            className="mb-2"
            value={fields.login}
            onChange={handleChange('login')}
            placeholder="Логин"
            required
          />
          <BaseInput
            className="mb-2"
            value={fields.email}
            onChange={handleChange('email')}
            placeholder="Почта"
            type="email"
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
          <BaseInput
            className="mb-2"
            value={fields.phone}
            onChange={handleChange('phone')}
            placeholder="Телефон"
            type="phone"
            required
          />
        </Form>
      </main>
    </div>
  );
};

export default Signup;
