import { SnakeCasedProperties } from 'type-fest';

type UserLogin = {
  login: string;
  password: string;
};
type UserLoginBack = SnakeCasedProperties<UserLogin>;
type UserRegister = {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};
type UserRegisterBack = SnakeCasedProperties<UserRegister>;

export { UserLogin, UserLoginBack, UserRegister, UserRegisterBack };
