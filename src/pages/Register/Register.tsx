import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BaseInput from 'components/BaseInput';
import Button from 'components/Button';
import Form from 'components/Form';
import Layout from 'components/Layout';

import { registerUser } from 'store/slices/auth';
import { Statuses } from 'store/types';
import { State } from 'store';
import { UserRegister } from 'types/user';

const Register: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector<State>((state) => state.auth.status);
  const loading = useSelector<State>((state) => state.auth.loading);

  const [fields, setFields] = useState<UserRegister>({
    firstName: '',
    secondName: '',
    login: '',
    email: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    if (status === Statuses.OK) {
      history.push('/');
    }
  }, [status, history]);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!(fields.login && fields.password)) {
        return;
      }

      dispatch(registerUser(fields));
    },
    [dispatch, fields],
  );

  const resetForm = useCallback(() => {
    const formFields = Object.keys(fields);
    const newState = formFields.reduce(
      (acc, field) => ({ ...acc, [field]: '' }),
      {},
    );

    setFields(newState as UserRegister);
  }, [fields]);

  const handleChange = useCallback(
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setFields((values: UserRegister) => ({
        ...values,
        [name]: e.target.value,
      }));
    },
    [],
  );

  return (
    <Layout>
      {loading ? (
        <span>Loading...</span>
      ) : (
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
      )}
    </Layout>
  );
};

export default Register;
