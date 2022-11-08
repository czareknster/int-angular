export interface UsersApiResponse {
  info: UsersApiResponseInfo;
  results: User[];
}

export interface UsersApiResponseInfo {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface User {
  id: UserId;
  gender: string;
  name: UserName;
  email: string;
  phone: string;
  cell: string;
  picture: UserPictire;
}

export interface UserId {
  name: string;
  value: string;
}

export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserPictire {
  large: string;
  medium: string;
  thumbnail: string;
}
