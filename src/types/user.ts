import { SnakeCasedProperties } from 'type-fest';

type UserLogin = {
  login: string;
  password: string;
};
type UserLoginDTO = SnakeCasedProperties<UserLogin>;
type UserRegister = {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};
type UserRegisterDTO = SnakeCasedProperties<UserRegister>;

export { UserLogin, UserLoginDTO, UserRegister, UserRegisterDTO };
