import React, {SyntheticEvent, useState} from 'react';

import Navbar from '@/components/Navbar';
import Form from '@/components/Form';
import BaseInput from "@/components/BaseInput";
import Button from "@/components/Button";

const HomePage: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleLogin = (e: SyntheticEvent<Element, InputEvent>) => setLogin(e.target.value);
  const handlePassword = (e: SyntheticEvent<Element, InputEvent>) => setPassword(e.target.value);
  const onSubmit = () => {};

  return (
    <>
      <Navbar />
      <main className="flex flex-1 justify-center items-center">
        <Form
          onSubmit={onSubmit}
          actions={[
            <Button
              key="button-submit"
              className="text-base font-medium rounded-lg p-3 bg-blue-600 text-white"
              type="submit"
            >
              Войти
            </Button>,
            <Button
              key="button-clear"
              className="text-base font-medium p-3 text-gray-600"
            >
              Очистить
            </Button>
          ]}
        >
          <BaseInput
            className="pb-2"
            value={login}
            onChange={handleLogin}
            placeholder="Логин"
            required
          />
          <BaseInput
            value={password}
            onChange={handlePassword}
            placeholder="Пароль"
            type="password"
            required
          />
        </Form>
      </main>
    </>
  );
}


export default HomePage;
