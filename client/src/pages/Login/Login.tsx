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

import { loginUser, Statuses } from 'store/slices/auth';
import { State } from 'store';
import { UserLogin } from 'types/user';

const Login: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector<State>((state) => state.auth.loading);
  const status = useSelector<State>((state) => state.auth.status);

  const [fields, setFields] = useState<UserLogin>({
    login: '',
    password: '',
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

      dispatch(loginUser(fields));
    },
    [dispatch, fields],
  );

  const resetForm = useCallback(() => {
    const formFields = Object.keys(fields);
    const newState = formFields.reduce(
      (acc, field) => ({ ...acc, [field]: '' }),
      {},
    );

    setFields(newState as UserLogin);
  }, [fields]);

  const handleChange = useCallback(
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setFields((values: UserLogin) => ({
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
      )}
    </Layout>
  );
};

export default Login;