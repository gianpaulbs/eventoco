export interface IUserRequest {
  email: string;
  password: string;
}

export interface IUserResponse {
  message: string;
  user: IUser;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id: number;
}
