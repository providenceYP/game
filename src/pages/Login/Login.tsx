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

import { State } from 'store';
import { loginUser } from 'store/slices/auth';
import { Statuses } from 'store/types';
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
    if (status === Statuses.OK && !loading) {
      history.push('/');
    }
  }, [status, history]);

  async function oathRedirectAction() {
    const response = await fetch(
      `${process.env.BASE_API_URL}oauth/yandex/service-id/?redirect_uri=${process.env.REDIRECT_URL}`,
      { method: 'GET', credentials: 'include' },
    );

    if (response.status === 200) {
      const serviceId = await response.json();

      window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId.service_id}&redirect_uri=${process.env.REDIRECT_URL}`;
    }
  }

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
          title="????????"
          onSubmit={onSubmit}
          onReset={resetForm}
          actions={[
            <Button
              key="button-submit"
              className="text-base font-medium rounded-lg p-2 bg-blue-600 text-white"
              type="submit"
            >
              ??????????
            </Button>,
            <Button
              key="button-clear"
              className="text-base font-medium p-2 text-gray-600"
              type="reset"
            >
              ????????????????
            </Button>,
            <Button
              className="text-base font-medium rounded-lg p-2 bg-yellow-300 text-white mt-10"
              key="redirect"
              onClick={oathRedirectAction}
            >
              OAuth Yandex
            </Button>,
          ]}
        >
          <BaseInput
            className="mb-2"
            value={fields.login}
            onChange={handleChange('login')}
            placeholder="??????????"
            required
          />
          <BaseInput
            className="mb-2"
            value={fields.password}
            onChange={handleChange('password')}
            placeholder="????????????"
            type="password"
            required
          />
        </Form>
      )}
    </Layout>
  );
};

export default Login;
